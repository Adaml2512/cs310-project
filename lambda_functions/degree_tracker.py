import json
import pymysql  

rds_host = 'csrequirements-db.clg8ccaem03v.us-east-2.rds.amazonaws.com'
db_username = 'admin'
db_password = ' cbD4YmnmeQZyZUiKuqGm'
db_name = 'csrequirements-db'

def lambda_handler(event, context):
    input_courses = event['data']

    conn = pymysql.connect(
        host=rds_host,
        user=db_username,
        password=db_password,
        database=db_name,
        cursorclass=pymysql.cursors.DictCursor
    )

    try:
        with conn.cursor() as cursor:
            # Track fulfilled credits per requirement
            fulfilled_credits = {}

            for course in input_courses:
                course_id = course['course_id']
                cursor.execute("SELECT requirement FROM courses WHERE course_id = %s", (course_id,))
                result = cursor.fetchone()

                if result:
                    req = result['requirement']
                    fulfilled_credits[req] = fulfilled_credits.get(req, 0) + 1  # assume 1 credit per course

            # Compare against total required credits
            cursor.execute("SELECT requirement, numcredits FROM requirements")
            all_requirements = cursor.fetchall()

            remaining_list = []
            for row in all_requirements:
                req = row['requirement']
                total_needed = row['numcredits']
                completed = fulfilled_credits.get(req, 0)
                remaining = max(0, total_needed - completed)
                remaining_list.append({
                    "requirement": req,
                    "credits_remaining": remaining
                })

        return {
            'statusCode': 200,
            'body': json.dumps(remaining_list)
        }
    except Exception as err:
    print("**ERROR**")
    print(str(err))
    
    return {
      'statusCode': 500,
      'body': json.dumps(str(err))
    }
