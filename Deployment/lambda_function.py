import os
import boto3
import json

# grab environment variables
ENDPOINT_NAME = os.environ['ENDPOINT_NAME']
runtime= boto3.client('runtime.sagemaker')

def lambda_handler(event, context):
    print("Received event: " + json.dumps(event, indent=2))
    
    data = json.loads(json.dumps(event))
    payload = data['data']
    
    #print(payload)
    
    response = runtime.invoke_endpoint(EndpointName=ENDPOINT_NAME,
                                       ContentType='text/csv',
                                       Body=payload)
    #print(response)
    result = json.loads(response['Body'].read())
   
    # classes = ['Hematopoietic and reticuloendothelial cancer', 
    #             'Brain cancer', 
    #             'Bronchus and lung cancer', 
    #             'Kidney cancer', 
    #             'Breast cancer', 
    #             'Uterus cancer', 
    #             'Skin cancer', 
    #             'Thyroid cancer', 
    #             'Colorectal cancer', 
    #             'Pancreas cancer']
               
    # res_list =  [ float(i) for i in result["probabilities"][0] ]
    # return classes[res_list.index(max(res_list))]
    probs = result["probabilities"][0]
    return probs
    
