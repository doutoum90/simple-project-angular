node('ecs-jenkins') {
  def app

  stage('Initialize'){
    env.NODEJS_HOME = "${tool 'node'}"
    env.PATH = "${env.NODEJS_HOME}/bin:${env.PATH}"
  }

  stage('Clone repository') {
    checkout scm
  }

  stage('Install dependencies') {
      sh 'npm install'
  }

  stage ('Tests Unitaires') {
    sh 'npm run test'
  }
  
  stage('SonarQube analysis') {
    def scannerHome = tool 'SonarVO2';
    withSonarQubeEnv('SonarVO2') {
      sh "${scannerHome}/bin/sonar-scanner"
    }
  }

  stage('Build Front') {
    sh 'npm run build'
  }

}
