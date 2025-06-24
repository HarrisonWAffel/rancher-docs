---
title: Google GCE Machine Configuration
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/google-gce"/>
</head>


For more information about Google Cloud Platform (GCP) and the Google Compute Engine (GCE), refer to the official [GCP documentation](https://cloud.google.com/docs).

### Zone

The GCP Region and Zone that the VM will be deployed to. (e.g. `us-east1-b`)


### Machine Type

The type of VM that will be deployed. Machine types determine the number of resources (vCPU, RAM, etc.) allocated for each node. 


### Machine Image

The operating system that will be installed onto the VM.


### Username

A custom username set as the default user of the GCE VM. 


### Project

The name of the GCP project that the VM will be provisioned within


### Scopes

A comma seperated list of OAuth2 scopes which allow the VM to access other GCP APIs. 


### Disk Size

The size of the disk attached to the VM, in Gigabytes. 


### Disk Type

The type of the disk attached to the VM. The available types may differ between regions.


### Network

The VPC network that the VM will be created in. 


### Subnet

The VPC subnetwork tha the VM will be created in.


### Preemptable

Determines if the VM is set as preemptable. Preemptable instances are offered at a lower cost, however they may be reclaimed depending on global GCP resource availability. 

### Tags

Tags is a comma seperated list of _network tags_. Network tags can be used to associate Firewall Rules with individual VMs.

By default, Rancher will automatically create a Firewall Rule to allow nodes to communicate internally, and add the relevant network tag onto all provisioned VMs.


### Use Internal IP

Set the internal IP address of the VM as the primary IP address


### Use Internal IP Only 

Determines if a public IP address will be assigned to the VM 


### Open Port

A list of ports to be opened _externally_ to the wider internet. Open ports are defined at the machine pool level. For each machine pool that defines one or more open ports, an additional machine pool specific firewall rule will be created in the specified VPC network.


### Userdata

Custom cloud init userdata to be executed when the VM starts for the first time. 


### Labels

A comma seperated list of custom labels to be attached to all VMs within a given machine pool. Unlike Tags, Labels do not have a functional purpose other than organization of cloud resources.
