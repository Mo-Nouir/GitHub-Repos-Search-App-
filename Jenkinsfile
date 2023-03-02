pipeline {
  
    agent any
  
    stages {
      stage("build"){
        
          steps{
            bat 'cd C:\Users\intern\Desktop'
          }
      }
      stage("test"){
        
          steps{
            bat 'python runner.py'
          }
      } 
      stage("deploy"){
        
          steps{
            echo 'Deploying application...'
          }
       
      }
    }
    
}
