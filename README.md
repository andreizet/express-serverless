# express-serverless
*Express server running on AWS Lambda*

### Requirements: ###
* [Node.js](https://nodejs.org/en/)
* [Serverless Framework](https://serverless.com/) 

    ```npm install -g serverless```
* [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)

### How to Run: ###

* Configure [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html):
    ```
   $ aws configure
   AWS Access Key ID [None]: EXAMPLE
   AWS Secret Access Key [None]: EXAMPLEKEY
   Default region name [None]: us-east-1
   Default output format [None]: json
   ```
* Be in project's root, run: 
    
    ```npm run```

### Steps to create a similar example: ###
* ```npm install serverless -g```
* ```serverless create --template aws-nodejs```
* ```npm install -s serverless-offline```
* ```aws configure```
* ```modify serverless.yml to match your own configuration```
* ```write your code```
