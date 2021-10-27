---
title: Blog 10
index: 10
---

**Date**: _11/13/2020_

This week I worked on *Amazon-Web-Services* (**AWS**) and was able to spin up a classic web-server hosted on the cloud. I learned a lot about the different services and architecture **Amazon** uses to serve many use cases of the client.

## VPC
Amazon provides a *Virtual Private Cloud* (**VPC**) to help manage a virtual network for all the different services/needs of the user. I was able to spin my VPC up with ease and managed my different resources that naturally goes along with a standard network. I configured a **Subnet** to be used within my VPC that will follow a **CIDR** block of `0.0.0.0/24`. From my configured subnet I split my network even more by allowing host connections within the `0.0.0.0/28` range. After working with Subnet configuration, I needed an entry-point in which my web-server is able to communicate with the outside world and I attached an **Internet Gateway** onto my VPC to allow it to communicate outside the private cloud infrastructure.

<img src="/assets/2020/aws_layers.png" style="max-width: 18rem;" alt="aws architecture layers" />

## Security Groups
The next step I took was whitelisting the services I wanted to communicate to my **EC2** instance hosting my web-server. I described two different protocols, I allowed `SSH` & `HTTP` to be specified within *only* my IP so no one else but I will able to communicate with my **AWS Resources**.

## EC2 Instance
Now that I have specified the proper *network* to connect to, I needed a way to host my web-server onto AWS. I used an **EC2** instance which is a *containerized* platform to host a standard linux enviornment where I will be able to `SSH` into the machine to run standard commands to spin up `Apache2`. In this case I installed `Ubuntu 18.04` and Apache2. The actual set-up process follows this chain of specifying an *Amazon Machine Image* (**AMI**) to run on the machine, Select the machine resources needed (in my case a t2.micro), then attaching all the proper settings (network, subnet, security group). After installing the EC2 instance I was given a **KeyPair** which is a encrypted file that will allow me to **Authenticate & Authorize** the connection needed to connect to the machine via SSH. It was also important to only give **READ-Access** *ONLY* to the file so the instance will accept my connection.

## Network Interface & Elastic IP's
The final steps I needed were to attach a **Network Interface** to my **EC2** instance so it will be able to communicate to my **VPC** on the **AWS** region. I assigned the **Subnet** I creted to the Network Interface, Attached a Security Group, and finally Associated my newly created Network Interface to my EC2 instance. Now that I have all the connections sorted out properly, I created an **Elastic IP** which is used to be able to connect on the *public internet* and associated it with my Network Interface. Viola, I now have a running web-server hosted on AWS.

<br>

Learn more about AWS services at the following link: [AWS Documentation](https://docs.aws.amazon.com/index.html)
