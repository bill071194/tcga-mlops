# Leveraging MLOps Principles in Developing a Scalable End-to-End Machine Learning Pipeline for Cancer Classification

Deployed frontend: https://tcga-mlops.vercel.app/

Jira timeline: https://csis4495.atlassian.net/jira/software/projects/KAN/boards/1/timeline?shared=&atlOrigin=eyJpIjoiOWExMzBlY2U3YTI3NGQzY2JlNzEzMTgyYjRiOTcwNzEiLCJwIjoiaiJ9

## Introduction

Early pinpointing of cancer types remain one of the most crucial aspects of oncology pathways, significantly increasing survival rates and quality of life after treatments. Under this premise, this project aims to leverage the robustness of genomic data in predicting and classifying cancer types, enabling oncologists to pinpoint the malignant origin efficiently. The Cancer Genome Atlas (TCGA) is a public resource from the National Cancer Institute whose goal is to store and distribute large amount of genomic data to the scientific community for cancer research. Thanks to their contribution, the main objective of this project is to create a scalable, end-to-end machine learning pipeline that can predict and classify cancer types based on biomarkers, specifically simple somatic mutations. Somatic mutations are non-hereditary and can occur spontaneously or under various external stressors, making them an interesting subject to explore. The workflow of the project is illustrated below.

![workflow](/img/MLOps_Workflow_FinalVer2.png "MLOps Workflow")

## Data Engineering

To use collected data from TCGA for machine learning purposes, the project employs Apache Spark and Pandas on a Databricks cluster for data crawling, ingestion, and transformation, and AWS S3 buckets for data loading.

### Data Crawling and Ingestion

TCGA provides convenient API endpoints for all querying purposes. To crawl data from these APIs in an efficient manner, Apache Spark was the tool of choice. By using UDFs (User Defined Functions), the project took advantage of Spark's parallelism to execute a large amount of API calls in short amounts of time, querying the necessary data for training without significant latencies. Data crawled from the API endpoints include standard demographic factors such as Age, Race, and Sex. For cancer related attributes, prior malignancy, synchronous malignancy, deceased status, and 59 somatic mutations were chosen as features. The somatic mutations were selected based on their VEP impact to each cancer type.

#### Insert Spark screenshot here

### Data Transformation

To transform the queried data, Pandas and Boto3 were used to load raw data from the S3 bucket, examine values, transform values, drop missing values, and hot encode values to render the data appropriate for machine learning. After transformation, the data are split into training and validation sets for machine learning.

### Data Loading

All the raw, processed, train, and validation datasets are loaded into their data storage of choice: AWS S3 buckets. For Pandas dataframes, a Boto3 client was the main method of data loading. For Spark dataframes, a AWS Java SDK bundle JAR and a Hadoop AWS Jar were installed on the Databricks Spark cluster as necessary infrastructures to load the dataframes onto their S3 bucket.


## Machine Learning

### Exploratory Data Analytics

Common Python libraries for EDA such as Pandas, Seaborn, Numpy, and Matplotlib were leveraged to visualize and explore the dataset. All visualizations are available in the Visualization folder, EDA notebook.

### Model training

For the machine learning model, 2 popular boosting algorithms were compared: LightGBM and CatBoost. After training and tuning the algorithms' hyperparameters with Bayesian Optimization libraries (bayes opt and Optuna), the CatBoost algorithm yielded better metrics (F1-macro: 0.70, Accuracy: 0.75) and was chosen for the final deployed model. The tuned hyperparameters were converted into a JSON object and loaded into a S3 bucket for the SageMaker model to utilize. After training and tuning the model locally, a AWS SageMaker training job was created and trained using the same hyperparameters for reproducable evaluation metrics. 

## Model Deployment

### SageMaker endpoint

After training, the SageMaker training job was converted into a model and deployed using SageMaker's CatBoost elastic containers and inference script. The deployed SageMaker endpoint was then tested using the validation data set to make sure that invocation of the endpoint had no issues.

### Serverless inference

To invoke the aforementioned SageMaker endpoint and get predictions from the model, the project employs the serverless architecture using a AWS Lambda function and API Gateway. The Lambda function receives the REST API request through API Gateway, transforms the body payload, invoke the SageMaker endpoint, and return the prediction response to the client REST API through API Gateway. The detailed architecture is illustrated below.

![architecture](/img/MLOps_Architecture_FinalVer2.png "MLOps Architecture")


