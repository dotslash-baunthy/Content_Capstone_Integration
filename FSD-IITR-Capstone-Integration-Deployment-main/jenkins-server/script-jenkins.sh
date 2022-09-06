#!/bin/bash
sudo apt update -y
sudo apt install openjdk-11-jdk -y
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash
sudo apt install nodejs -y
sudo apt install awscli -y
sudo apt install jq -y
sudo apt install npm -y
wget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key |sudo gpg --dearmor -o /usr/share/keyrings/jenkins.gpg
sudo sh -c 'echo deb [signed-by=/usr/share/keyrings/jenkins.gpg] http://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list'
sudo apt update -y
sudo apt-get install jenkins -y
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release -y
sudo apt-get install ca-certificates curl gnupg lsb-release -y
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
 $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update -y
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin -y
#apt-cache madison docker-ce
#sudo apt-get install docker-ce docker-ce-cli containerd.io -y
sudo groupadd docker
sudo usermod -aG docker ubuntu
sudo usermod -aG docker jenkins
#sudo cat /var/lib/jenkins/secrets/initialAdminPassword
#sudo apt install maven -y