# Defining CIDR Block for VPC
variable "default_vpc_id" {
  default = "vpc-059f3ee8ab05bca9f"
}

# Definign Key Name for connection
variable "key_name" {
  default = "DemoKeyPair"
  description = "Name of AWS key pair"
}

# Defining Public Key
variable "public_key" {
  default = "DemoKeyPair.pub"
}


# Definign user script name
variable "user_script_name" {
  default = "script-jenkins.sh"
}

//region
variable "region" {
    default = "us-east-1"
}

variable "app_count" {
  type = number
  default = 1
}

variable "amis" {
    type = map(string)
    default = {
        us-east-1 = "ami-0729e439b6769d6ab" # Canonical, Ubuntu, 18.04 LTS, amd64 bionic image build on 2022-06-10
        us-west-2 = "ami-098e42ae54c764c35"
    }
}