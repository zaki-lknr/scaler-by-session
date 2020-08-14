CLUSTER_NAME := scale-session
NODE_MIN := 3
NODE_MAX := 3
NODE_TYPE := t3.large
K8S_VERSION := 1.16

.PHONY: clreate-cluster
create-cluster:
	eksctl create cluster \
  	--name=$(CLUSTER_NAME) \
  	--version $(K8S_VERSION) \
  	--managed \
  	--asg-access \
  	--nodes-min $(NODE_MIN) \
  	--nodes-max $(NODE_MAX) \
  	--node-type $(NODE_TYPE)