pipeline {
    agent any
    environment {
        AWS_ACCOUNT_ID="756688684263"
        AWS_DEFAULT_REGION="us-east-1" 
        CLUSTER_NAME="ecs-demo-cluster-test"
        SERVICE_NAME="ecs-demo-service-test"
        TASK_DEFINITION_NAME="ecs-terraform-demo"
        DESIRED_COUNT="4"
        IMAGE_REPO_NAME="ecs-demo-test"
        IMAGE_TAG="${env.BUILD_ID}"
        REPOSITORY_URI = "${AWS_ACCOUNT_ID}.dkr.ecr.${AWS_DEFAULT_REGION}.amazonaws.com/${IMAGE_REPO_NAME}"
	      registryCredential = "demo-admin-user"
    }
   
  stages {
   // Building Docker images
    stage('Building image') {
      steps{
        script {
          dockerImage = docker.build "${IMAGE_REPO_NAME}:${IMAGE_TAG}"
        }
      }
    }
   
    // Uploading Docker images into AWS ECR
    stage('Pushing to ECR') {
     steps{  
         script {
			docker.withRegistry("https://" + REPOSITORY_URI, "ecr:${AWS_DEFAULT_REGION}:" + registryCredential) {
                    	dockerImage.push()
                	}
         }
        }
      }
    
    //deploy to ecs
    stage('Deploy') {
     steps{
            withAWS(credentials: registryCredential, region: "${AWS_DEFAULT_REGION}") {
                script {
                  sh 'chmod 777 *'
			            sh './script.sh'
                }
            } 
        }
      }
    }
}

