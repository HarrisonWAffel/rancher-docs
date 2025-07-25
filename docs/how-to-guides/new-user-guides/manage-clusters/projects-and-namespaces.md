---
title: Projects and Kubernetes Namespaces with Rancher
description: Rancher Projects ease the administrative burden of your cluster and support multi-tenancy. Learn to create projects and divide projects into Kubernetes namespaces
---

<head>
  <link rel="canonical" href="https://ranchermanager.docs.rancher.com/how-to-guides/new-user-guides/manage-clusters/projects-and-namespaces"/>
</head>

A namespace is a Kubernetes concept that allows a virtual cluster within a cluster, which is useful for dividing the cluster into separate "virtual clusters" that each have their own access control and resource quotas.

A project is a group of namespaces, and it is a concept introduced by Rancher. Projects allow you to manage multiple namespaces as a group and perform Kubernetes operations in them. You can use projects to support multi-tenancy, so that a team can access a project within a cluster without having access to other projects in the same cluster.

:::note

Projects are de-emphasized on the UI because it is not required to create Kubernetes resources within a project scope. However, resources such as [Secrets](../../new-user-guides/kubernetes-resources-setup/secrets.md#creating-secrets-in-projects) can still be created in a project scope if the legacy feature flag is enabled.

:::

This section describes how projects and namespaces work with Rancher.

## About Namespaces

A namespace is a concept introduced by Kubernetes. According to the [official Kubernetes documentation on namespaces,](https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/)

:::note

Kubernetes supports multiple virtual clusters backed by the same physical cluster. These virtual clusters are called namespaces. [...] Namespaces are intended for use in environments with many users spread across multiple teams, or projects. For clusters with a few to tens of users, you should not need to create or think about namespaces at all.

:::

Namespaces provide the following functionality:

- **Providing a scope for names:** Names of resources need to be unique within a namespace, but not across namespaces. Namespaces can not be nested inside one another and each Kubernetes resource can only be in one namespace.
- **Resource quotas:** Namespaces provide a way to divide cluster resources between multiple users.

You can assign resources at the project level so that each namespace in the project can use them. You can also bypass this inheritance by assigning resources explicitly to a namespace.

You can assign the following resources directly to namespaces:

- [Workloads](../kubernetes-resources-setup/workloads-and-pods/workloads-and-pods.md)
- [Load Balancers/Ingress](../kubernetes-resources-setup/load-balancer-and-ingress-controller/load-balancer-and-ingress-controller.md)
- [Service Discovery Records](../../new-user-guides/kubernetes-resources-setup/create-services.md)
- [Persistent Volume Claims](create-kubernetes-persistent-storage/create-kubernetes-persistent-storage.md)
- [Certificates](../../new-user-guides/kubernetes-resources-setup/encrypt-http-communication.md)
- [ConfigMaps](../../new-user-guides/kubernetes-resources-setup/configmaps.md)
- [Registries](../../new-user-guides/kubernetes-resources-setup/kubernetes-and-docker-registries.md)
- [Secrets](../../new-user-guides/kubernetes-resources-setup/secrets.md)

To manage permissions in a vanilla Kubernetes cluster, cluster admins configure role-based access policies for each namespace. With Rancher, user permissions are assigned on the project level instead, and permissions are automatically inherited by any namespace owned by the particular project.

For more information on creating and moving namespaces, see [Namespaces](../../new-user-guides/manage-namespaces.md).

### Role-based access control issues with namespaces and kubectl

Because projects are a concept introduced by Rancher, kubectl does not have the capability to restrict the creation of namespaces to a project the creator has access to.

This means that when standard users with project-scoped permissions create a namespaces with `kubectl`, it may be unusable because `kubectl` doesn't require the new namespace to be scoped within a certain project.

If your permissions are restricted to the project level, it is better to [create a namespace through Rancher](../../new-user-guides/manage-namespaces.md) to ensure that you will have permission to access the namespace.

If a standard user is a project owner, the user will be able to create namespaces within that project. The Rancher UI will prevent that user from creating namespaces outside the scope of the projects they have access to.

## About Projects

In terms of hierarchy:

- Clusters contain projects
- Projects contain namespaces

You can use projects to support multi-tenancy, so that a team can access a project within a cluster without having access to other projects in the same cluster.

In the base version of Kubernetes, features like role-based access rights or cluster resources are assigned to individual namespaces. A project allows you to save time by giving an individual or a team access to multiple namespaces simultaneously.

You can use projects to perform actions such as:

- Assign users to a group of namespaces (i.e., [project membership](../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)).
- Assign users specific roles in a project. A role can be owner, member, read-only, or [custom](../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/custom-roles.md).
- Assign resources to the project.
- Assign Pod Security Policies.

When you create a cluster, two projects are automatically created within it:

- [Default Project](#the-clusters-default-project)
- [System Project](#the-system-project)

### The Cluster's Default Project

When you provision a cluster with Rancher, it automatically creates a `default` project for the cluster. This is a project you can use to get started with your cluster, but you can always delete it and replace it with projects that have more descriptive names.

If you don't have a need for more than the default namespace, you also do not need more than the **Default** project in Rancher.

If you require another level of organization beyond the **Default** project, you can create more projects in Rancher to isolate namespaces, applications and resources.

### The System Project

When troubleshooting, you can view the `system` project to check if important namespaces in the Kubernetes system are working properly. This easily accessible project saves you from troubleshooting individual system namespace containers.

To open it, open the cluster view and click **Cluster > Projects/Namespaces**. This view shows all of the namespaces in the `system` project.

The `system` project:

- Is automatically created when you provision a cluster.
- Lists all namespaces that exist in `v3/settings/system-namespaces`, if they exist.
- Allows you to add more namespaces or move its namespaces to other projects.
- Cannot be deleted because it's required for cluster operations.

:::note

In RKE clusters where the project network isolation option is enabled, the `system` project overrides the project network isolation option so that it can communicate with other projects, collect logs, and check health.

:::

## Project Authorization

Standard users are only authorized for project access in two situations:

- An administrator, cluster owner or cluster member explicitly adds the standard user to the project's **Members** tab.
- Standard users can access projects that they create themselves.

## Pod Security Policies

Rancher extends Kubernetes to allow the application of [Pod Security Policies](https://kubernetes.io/docs/concepts/policy/pod-security-policy/) at the project level in addition to the cluster level. However, as a best practice, we recommend applying Pod Security Policies at the cluster level.

## Creating Projects

This section describes how to create a new project with a name and with optional pod security policy, members, and resource quotas.

1. [Name a new project.](#name-a-new-project)
1. [Recommended: Add project members.](#recommended-add-project-members)
1. [Optional: Add resource quotas.](#optional-add-resource-quotas)

### Name a New Project

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster you want to project in and click **Explore**.
1. Click **Cluster > Projects/Namespaces**.
1. Click **Create Project**.
1. Enter a **Project Name**.

### Recommended: Add Project Members

Use the **Members** section to provide other users with project access and roles.

By default, your user is added as the project `Owner`.

:::note Notes on Permissions:

- Users assigned the `Owner` or `Member` role for a project automatically inherit the `namespace creation` role. However, this role is a [Kubernetes ClusterRole](https://kubernetes.io/docs/reference/access-authn-authz/rbac/#role-and-clusterrole), meaning its scope extends to all projects in the cluster. Therefore, users explicitly assigned the `Owner` or `Member` role for a project can create namespaces in other projects they're assigned to, even with only the `Read Only` role assigned.

- By default, the Rancher role of `project-member` inherits from the `Kubernetes-edit` role, and the `project-owner` role inherits from the `Kubernetes-admin` role. As such, both `project-member` and `project-owner` roles will allow for namespace management, including the ability to create and delete namespaces.

- Choose `Custom` to create a custom role on the fly: [Custom Project Roles](../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md#custom-project-roles).

:::

To add members:

1. In the **Members** tab, click **Add**.
1. From the **Select Member** field, search for a user or group that you want to assign project access. You can only search for groups if external authentication is enabled.

    :::note Notes:

    - At least 2 characters must be typed in the search box for results to appear.
    - Users can be searched based on their username or display name.
    - Search is prefix-based (e.g., a user named `Stan Dard` will appear when searching for `Sta`, but not when searching for `Dar`) and case-sensitive.

    :::
1. In the **Project Permissions** section, choose a role. For more information, refer to the [documentation on project roles.](../authentication-permissions-and-global-configuration/manage-role-based-access-control-rbac/cluster-and-project-roles.md)

### Optional: Add Resource Quotas

Resource quotas limit the resources that a project (and its namespaces) can consume. For more information, see [Resource Quotas](../../advanced-user-guides/manage-projects/manage-project-resource-quotas/manage-project-resource-quotas.md).

To add a resource quota,

1. In the **Resource Quotas** tab, click **Add Resource**.
1. Select a **Resource Type**. For more information, see [Resource Quotas.](../../advanced-user-guides/manage-projects/manage-project-resource-quotas/manage-project-resource-quotas.md).
1. Enter values for the **Project Limit** and the **Namespace Default Limit**.
1. **Optional:** Specify **Container Default Resource Limit**, which will be applied to every container started in the project. The parameter is recommended if you have CPU or Memory limits set by the Resource Quota. It can be overridden on per an individual namespace or a container level. For more information, see [Container Default Resource Limit](../../advanced-user-guides/manage-projects/manage-project-resource-quotas/manage-project-resource-quotas.md)
1. Click **Create**.

**Result:** Your project is created. You can view it from the cluster's **Projects/Namespaces** view.

| Field                   | Description                                                                                              |
| ----------------------- | -------------------------------------------------------------------------------------------------------- |
| Project Limit           | The overall resource limit for the project.                                                              |
| Namespace Default Limit | The default resource limit available for each namespace. This limit is propagated to each namespace in the project when created. The combined limit of all project namespaces shouldn't exceed the project limit.  |

## Deleting Projects

1. In the upper left corner, click **☰ > Cluster Management**.
1. On the **Clusters** page, go to the cluster the project is attached to, and click **Explore**.
1. Click **Cluster > Projects/Namespaces**.
1. Find the project you want to delete, and click **⋮**.
1. Select **Delete**.

When you delete a project, any namespaces that were formerly associated with the project will remain on the cluster. You can find these namespaces in the Rancher UI, in the **Not in a Project** tab of the **Projects/Namespaces** page. You can reassign these namespaces to a project by [moving](../manage-namespaces.md#moving-namespaces-to-another-project) them.
