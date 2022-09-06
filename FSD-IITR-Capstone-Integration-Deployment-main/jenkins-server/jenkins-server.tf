resource "aws_instance" "web" {
    ami = "${lookup(var.amis, var.region)}"
    instance_type = "t3.medium"
    tags = {
        Name = "Jenkins-server"
    }
    key_name = "${var.key_name}"
    vpc_security_group_ids = [ "${aws_security_group.ec2sg.id}" ]
    user_data = file("${var.user_script_name}") 
}