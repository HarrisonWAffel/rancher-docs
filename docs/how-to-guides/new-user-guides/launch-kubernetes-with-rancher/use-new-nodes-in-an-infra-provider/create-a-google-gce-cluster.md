---
title: Creating a Google GCE Cluster
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/launch-kubernetes-with-rancher/use-new-nodes-in-an-infra-provider/create-a-google-gce-cluster"/>
</head>


In this section, you'll learn how to use Rancher to provision an [RKE2](https://docs.rke2.io/) Kubernetes cluster on the Google Cloud Platform (GCP) using Google Compute Engine (GCE) through Rancher.


:::info
The GCE node driver does not support provisioning RKE1 clusters through Rancher.
:::


First, you will enable the GCE node driver in the Rancher UI. Then, you follow the steps to create a GCP service account with the necessary permissions, and generate a JSON key file. This key file will be used to create a cloud credential in Rancher. 


Then, you will create a GCE cluster in Rancher, and when configuring the cluster, you will define machine pools for it. Each machine pool will have a Kubernetes role of etcd, controlplane, or worker. Rancher will install RKE2 onto the new nodes, and it will set up each node with the Kubernetes role defined by the machine pool.


1. [Enable the GCE node driver](#1-enable-the-gce-node-driver)
1. [Create your cloud credential](#2-create-a-cloud-credential)
1. [Create a GCE cluster with your cloud credential](#3-create-a-cluster-using-the-cloud-credential)
1. [GCE Best Practices](#gce-best-practices)

### Prerequisites

1.   A valid Google Cloud Platform account and project.
1.   A GCP Service Account JSON key file. The service account associated with this key must have the following IAM roles:
      1. **Compute Admin**
      1. **Service Account User**
      1. **Viewer**
1. A VPC Network to provision VMs within 

Refer to the [GCP documentation](https://cloud.google.com/iam/docs/service-account-overview) on creating and managing service account keys for more details.


### 1. Enable the GCE node driver

The Google GCE node driver is not enabled by default in Rancher. You must enable it before you can provision GCE clusters, or work with GCE specific CRDs.

1.  Click **☰ > Cluster Management**.
1.  On the left hand side, click **Drivers**.
1.  Open the **Node Drivers** tab.
1.  Find the **Google GCE** driver and select **⋮ > Activate**.


### 2. Create a cloud credential

1. Click **☰ > Cluster Management**.
1. Click **Cloud Credentials**.
1. Click **Create**.
1. Click **Google**.
1. Enter your GCP service account key file.
1. Click **Create**.

**Result:** You have created the cloud credentials that will be used to provision nodes in your cluster. You can reuse these credentials for other node templates, or in other clusters. Depending on the permissions granted to the service account, this credential may also be used for GKE clusters. 




### 3. Create a cluster using the cloud credential

1. Click **☰ > Cluster Management**.
1. On the **Clusters** page, click **Create**.
1. Click **Google GCE**.
1. Select a **Cloud Credential**, if more than one exists. Otherwise, it is preselected.
1. Enter a **Cluster Name**.
1. Create a machine pool for each Kubernetes role. Refer to the [best practices](use-new-nodes-in-an-infra-provider.md#node-roles) for recommendations on role assignments and counts.
  1. For each machine pool, define the machine configuration. Refer to the [Google GCE machine configuration reference](../../../../reference-guides/cluster-configuration/downstream-cluster-configuration/machine-configuration/google-gce.md) for information on configuration options.
1. Use the **Cluster Configuration** to choose the version of Kubernetes that will be installed, what network provider will be used and if you want to enable project network isolation. For help configuring the cluster, refer to the [RKE2 cluster configuration reference.](../../../../reference-guides/cluster-configuration/rancher-server-configuration/rke2-cluster-configuration.md)
1. Use **Member Roles** to configure user authorization for the cluster. Click **Add Member** to add users that can access the cluster. Use the **Role** drop-down to set permissions for each user.
1. Click **Create**.


**Result:**

Your cluster is created and assigned a state of **Provisioning**. Rancher is standing up your cluster.

You can access your cluster after its state is updated to **Active**.

**Active** clusters are assigned two Projects:

- `Default`, containing the `default` namespace
- `System`, containing the `cattle-system`, `ingress-nginx`, `kube-public`, and `kube-system` namespaces

### GCE Best Practices

#### Firewall Rules, Open Ports, and ACE

To ensure that downstream clusters can be accessed without Ranchers Authorized Cluster Endpoint, controlplane nodes should expose port `6443`.

To prevent this port from being exposed across all cluster nodes, and to reduce the number of Firewall Rules created by Rancher, this port is not exposed by default. When configuring a controlplane machine pool, the best practice is to specify this port in the Rancher UI. Alternatively, you can manually create a Firewall Rule and assign the related network tag in the machine-pool configuration.

#### Cross Network Deployments

While it is possible to deploy or migrate different machine pools onto different VPC networks, the internal Firewall Rule created by Rancher does not support this by default. To deploy VMs in different networks, or migrate existing pools to new networks, Firewall Rules to facilitate communication between nodes on different networks must be manually created.


#### Internal Firewall Rules

Rancher will automatically create a Firewall Rule and network tag to facilitate communication between cluster nodes internally within the specified VPC network. This rule will contain the minimum number of ports required to create an RKE2 cluster. If you need to extend the number of ports exposed internally between cluster nodes, a new Firewall rule must be manually created and the associated network tag assigned to the relevant cluster machine pools.

## Optional Next Steps

After creating your cluster, you can access it through the Rancher UI. As a best practice, we recommend setting up these alternate ways of accessing your cluster:

- **Access your cluster with the kubectl CLI:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#accessing-clusters-with-kubectl-from-your-workstation) to access clusters with kubectl on your workstation. In this case, you will be authenticated through the Rancher server’s authentication proxy, then Rancher will connect you to the downstream cluster. This method lets you manage the cluster without the Rancher UI.
- **Access your cluster with the kubectl CLI, using the authorized cluster endpoint:** Follow [these steps](../../../new-user-guides/manage-clusters/access-clusters/use-kubectl-and-kubeconfig.md#authenticating-directly-with-a-downstream-cluster) to access your cluster with kubectl directly, without authenticating through Rancher. We recommend setting up this alternative method to access your cluster so that in case you can’t connect to Rancher, you can still access the cluster.
