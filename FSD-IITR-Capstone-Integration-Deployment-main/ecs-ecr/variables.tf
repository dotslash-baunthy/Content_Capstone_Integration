//region
variable "region" {
    default = "us-east-1"
}

variable "availability_zones" {
  description = "a comma-separated list of availability zones, defaults to all AZ of the region, if set to something other than the defaults, both private_subnets and public_subnets have to be defined as well"
  default     = ["us-east-1a", "us-east-1b", "us-east-1c"]
}


variable "cidr" {
  description = "The CIDR block for the VPC."
  default     = "10.0.0.0/16"
}

variable "private_subnets" {
  description = "a list of CIDRs for private subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  default     = ["10.0.0.0/20", "10.0.32.0/20", "10.0.64.0/20"]
}

variable "public_subnets" {
  description = "a list of CIDRs for public subnets in your VPC, must be set if the cidr variable is defined, needs to have as many elements as there are availability zones"
  default     = ["10.0.16.0/20", "10.0.48.0/20", "10.0.80.0/20"]
}

variable "name" {
  description = "the name of your stack, e.g. \"demo\""
  default     = "ecs-demo"
}

variable "environment" {
  description = "the name of your environment, e.g. \"prod\""
  default     = "test"
}

variable "ecr-name" {
  description = "this name is getting used in jenkins file of the source code"
  default     = "ecs-demo-test"
}


variable "container_port" {
  description = "The port where the Docker is exposed"
  default     = 3000
}

variable "container_image" {
  description = "Docker image to be launched"
  default     = "756688684263.dkr.ecr.us-east-1.amazonaws.com/ecs-demo-test"
}

variable "container_family" {
  default     = "ecs-terraform-demo"
}

variable "container_environment" {
  description = "The container environmnent variables"
  type        = list
  default = [
    { name = "LOG_LEVEL",
    value = "DEBUG" },
    { name = "PORT",
    value = 3000 }
  ]
}

