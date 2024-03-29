import { Link } from "react-router-dom";
import * as React from 'react';
import {
  IStyleSet,
  Label,
  ILabelStyles,
  Pivot,
  PivotItem,
  Toggle,
  Stack,
  ComboBox,
  IComboBox,
  IComboBoxOption,
  IComboBoxStyles,
  SelectableOptionMenuItemType,
  PrimaryButton,
  IButtonStyles,
  ChoiceGroup,
  IChoiceGroupOption,
  TextField,
  MaskedTextField,
  Slider,
  IStackTokens
} from '@fluentui/react';

const labelStyles: Partial<IStyleSet<ILabelStyles>> = {
  root: { marginTop: 10 },
};

const options1: IComboBoxOption[] = [
  { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' },
];
const options2: IComboBoxOption[] = [
  { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' },
];
const options3: IChoiceGroupOption[] = [
  { key: 'A', text: 'Enterprise Agreement' },
  { key: 'B', text: 'Microsoft Customer Agreement' },
  { key: 'C', text: 'Cloud Service Provider' },
  { key: 'D', text: 'Pay-as-You-Go' }
];
const options4: IChoiceGroupOption[] = [
  { key: 'A', text: 'No Azure AD Tenant.' },
  { key: 'B', text: 'One Azure AD Tenant. No identity synchronisation from on-premises Active Directory Domain Services (ADDS), but ADDS are in use on-premises. Users have two accounts: one for on-premises, and one for Azure AD federated resources (like Microsoft 365).' },
  { key: 'C', text: 'Multiple Azure AD Tenants, with one Tenant for each environment (prod, test, dev).' },
  { key: 'D', text: 'Multiple Azure AD Tenants due to acquisitions of or mergers between multiple organizations.' },
  { key: 'E', text: 'One Azure AD Tenant with identity synchronization from on-premises Active Directory Domain Services via Azure AD Connect. Users have a single account across on-premises and Azure AD federated resoruces (such as Microsoft 365).' }
];
const options5: IChoiceGroupOption[] = [
  { key: 'A', text: 'Username & password' },
  { key: 'B', text: 'Username & Password + MFA (Azure AD MFA or 3rd party MFA)' },
  { key: 'C', text: 'Azure AD Conditional Access policies' },
  { key: 'D', text: 'Username & Password + MFA (Azure AD MFA or 3rd party MFA) + Azure AD Conditional Access policies' },
  { key: 'E', text: 'Azure AD Privileged Identity Management (PIM)' },
  { key: 'F', text: 'Azure AD Security Defaults' },
  { key: 'G', text: 'Azure AD Identity Protection' },
  { key: 'H', text: 'Microsoft Defender for Identity' }
];
const options6: IChoiceGroupOption[] = [
  { key: 'A', text: 'All users' },
  { key: 'B', text: 'IT Administrators only' },
  { key: 'C', text: 'Azure AD Conditional Access policies' },
  { key: 'D', text: 'IT Administrators & VIP users' },
  { key: 'E', text: 'No users' }
];
const options7: IChoiceGroupOption[] = [
  { key: 'A', text: 'No' },
  { key: 'B', text: 'Yes, but none are excluded from MFA or Conditional Access policies or have a Azure AD PIM permanent role assignment' },
  { key: 'C', text: 'Yes, and at least one is excluded from MFA and Conditional Access polices and has an Azure AD PIM permanent role assignment of Global Admin to Azure AD' }
];
const options8: IChoiceGroupOption[] = [
  { key: 'A', text: 'No monitoring, logging or alerting.' },
  { key: 'B', text: 'All Azure AD audit & sign-in logs are sent to a central Log Analytics workspace, but no alerting is configured.' },
  { key: 'C', text: 'All Azure AD audit & sign-in logs + all Azure Subscription Activity logs are sent to a central Log Analytics workspace, but no alerting is configured.' },
  { key: 'D', text: 'All Azure AD audit & sign-in logs are sent to a central Log Analytics workspace. Alerting is configured based on these logs for scenarios like the use of emergency access accounts.' },
  { key: 'E', text: 'All Azure AD audit & sign-in logs + all Azure Subscription Activity logs are sent to a central Log Analytics workspace. Alerting is configured based on these logs for scenarios like the use of emergency access accounts.' },
  { key: 'F', text: 'All Azure AD audit & sign-in logs + all Azure Subscription Activity logs are sent to a central Log Analytics workspace. Alerting is configured based on these logs for scenarios like the use of emergency access accounts, and Microsoft Sentinel provides analysis and alerts.' },
];
const options9: IChoiceGroupOption[] = [
  { key: 'A', text: 'No access, or access is not needed.' },
  { key: 'B', text: 'Azure AD guest users (B2B) are invited into our Azure AD tenant.' },
  { key: 'C', text: 'Azure Lighthouse delegation.' },
  { key: 'D', text: 'A mixture of both Azure AD guest users (B2B) invitation and Azure Lighthouse delegation.' }

];
const options10: IChoiceGroupOption[] = [
  { key: 'A', text: 'RBAC assignments are given to individual users.' },
  { key: 'B', text: 'RBAC assignments are only given to groups (cloud only or synchronized). Users are added to the groups.' },
  { key: 'C', text: 'RBAC assignments are only given to groups (cloud only). Users are added to the groups.' },
  { key: 'D', text: 'RBAC assignments are only given to groups (cloud only or synchronized). Users added to groups, and all assignments (except "read only" permissions) are enforced using Azure AD PIM.' }
];
const options11: IChoiceGroupOption[] = [
  { key: 'A', text: 'Only built-in RBAC roles are assigned. These roles grant higher level roles to cover all required permissions, even for actions that may not be required (like assigning Owner or Contributor to everyone)' },
  { key: 'B', text: 'Only built-in RBAC roles are assigned. These roles assign numerous built-in roles multiple times to tightly scope and control permissions and ensure that only required permissions are given.' },
  { key: 'C', text: 'Custom RBAC roles are assigned for all requirements.' },
  { key: 'D', text: 'Custom RBAC role assignments are used alongside built-in role assignments to provide what permissions the built-in roles do not include. Custom RBAC roles are only assigned when absolutely necessary, since custom requirements are not covered by the built-in roles or any combination of built-in roles.' }
];
const options12: IComboBoxOption[] = [
  { key: 'Header1', text: 'First heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'A', text: 'Option A' },
  { key: 'B', text: 'Option B' },
  { key: 'C', text: 'Option C' },
  { key: 'D', text: 'Option D' },
  { key: 'divider', text: '-', itemType: SelectableOptionMenuItemType.Divider },
  { key: 'Header2', text: 'Second heading', itemType: SelectableOptionMenuItemType.Header },
  { key: 'E', text: 'Option E' },
  { key: 'F', text: 'Option F', disabled: true },
  { key: 'G', text: 'Option G' },
  { key: 'H', text: 'Option H' },
  { key: 'I', text: 'Option I' },
  { key: 'J', text: 'Option J' },
];
const options13: IChoiceGroupOption[] = [
  { key: 'A', text: 'Hub and spoke with Azure Firewall' },
  { key: 'B', text: 'Hub and spoke with your own third-party NVA' },
  { key: 'C', text: 'Virtual WAN (Microsoft managed)' },
  { key: 'D', text: 'No' }
];
const options14: IChoiceGroupOption[] = [
  { key: 'A', text: 'We do not have a Hub and Spoke topology based on traditional Virtual Networks. We use Azure VWAN instead. (If you select this alternative, skip the following options and move on to the next question).' },
  { key: 'B', text: 'Our organization deployed resources across one or multiple Azure regions. While some traffic across Azure regions is expected (such as traffic between two virtual networks across two different Azure regions), we do not require a full mesh network across all Azure regions.' },
  { key: 'C', text: 'We require full control and granularity for manual configuration of our Azure network routing policy.' },
  { key: 'D', text: 'We have a low number of remote or branch locations per region (fewer than 100 IPsec Site-to-Site tunnels).' },
  { key: 'E', text: 'We connect our Landing zone Virtual Networks to a Central Hub virtual network through Vnet Peering for cross-premises connectivity via ExpressRoute, VPN for branch connectivity, NVAs and UDRs for spoke-to-spoke connectivity, Azure Firewall or a partner NVA (as required) for internet-outbound protection.' },
  { key: 'F', text: 'When one of the following conditions is true, we use a topology of multiple Hub Virtual networks or even Landing Zones Virtual Networks connected with multiple ExpressRoute circuits: - We need a higher level of isolation. - We need dedicated ExpressRoute bandwidth for specific business units. - We have reached the maximum number of connections per ExpressRoute gateway.' },
  { key: 'G', text: 'We use multiprotocol label switching, SD-WAN, and our existing network to connect branch locations with corporate headquarters. We use Azure Route Server when transit between ExpressRoute and VPN gateways is required.' },
  { key: 'H', text: 'We have hub-and-spoke networks in multiple Azure regions. When a few of our landing zones need to connect across regions, we use global virtual network peering to directly connect landing zone virtual networks that need to route traffic to each other.' },
  { key: 'I', text: 'When our Landing Zone Virtual Networks from different Azure regions need to communicate, we either: - Deploy a partner NVA or Azure Firewall in the Hub, then initiate Global Vnet peering between the hubs. - Interconnect ExpressRoute Gateways and Circuits across regions. In this scenario, both gateways are connected to both circuits, with different weights in the connection resource.' },
  { key: 'J', text: 'We deploy each regions hub network resources into separate resource groups and sort them into each deployed region.' },
  { key: 'K', text: 'We use Azure Monitor for Networks to monitor our virtual networks end-to-end state.' }
];
const options15: IChoiceGroupOption[] = [
  { key: 'A', text: 'We do not have a Hub and Spoke topology based on Azure VWAN. We use traditional Virtual Networks instead. (If you select this alternative, skip the following options and move on to the next question).' },
  { key: 'B', text: 'At least one of the following statements is true about our requirements/environment: - Our organization has resources deployed across several Azure regions and. We have global connectivity between VNets in these Azure regions and between multiple on-premises locations through the Azure Global Network. - Our organization intends to integrate a large-scale branch network that requires more than 100 branch sites for native IPsec termination directly into Azure using a software-defined WAN (SD-WAN) deployment. - Our organization requires transitive routing between VPN and ExpressRoute. Remote branches linked via site-to-site VPN and/or remote users linked via point-to-site VPN connect to on-premises datacenters via Azure using the ExpressRoute private infrastructure. - Our organization needs an aggregated throughput higher than 10 Gbps between Azure and on-premises locations.' },
  { key: 'C', text: 'We connect multiple landing zones together across Azure regions using a Virtual WAN hub for each Azure region and a common global Azure Virtual WAN.' },
  { key: 'D', text: 'We deploy all Virtual WAN resources into a single resource group in our connectivity subscription, even when we deploy across multiple regions.' },
  { key: 'E', text: 'We use virtual hub routing features to further segment traffic between VNets and branches.' },
  { key: 'G', text: 'We use ExpressRoute to connect Virtual WAN hubs to on-premises datacenters.' },
  { key: 'H', text: 'We deploy required shared services, like DNS servers, in a dedicated spoke virtual network.' },
  { key: 'I', text: 'We connect branches and remote locations to the nearest Virtual WAN hub using Site-to-Site VPN, or we enable branch connectivity to Virtual WAN via an SD-WAN partner solution.' },
  { key: 'J', text: 'When required, we connect users to our Virtual WAN hub via a Point-to-Site VPN.' },
  { key: 'K', text: 'We follow the principle of "traffic in Azure stays in Azure" so that communication across resources in Azure occurs via the Microsoft backbone network, even when the resources are in different regions.' },
  { key: 'L', text: 'We house the Azure Virtual WAN and Azure Firewall resources within our connectivity subscription.' },
  { key: 'M', text: 'We have a single Azure DDoS standard protection plan deployed in our connectivity subscription.' }
];
const options16: IChoiceGroupOption[] = [
  { key: 'A', text: 'We require private connectivity to Azure, and we currently use VPN.' },
  { key: 'B', text: 'We require private connectivity to Azure, and we currently use ExpressRoute circuits.' },
  { key: 'C', text: 'We require encryption and private connectivity for Azure, and we currently use ExpressRoute Direct with MacSec enabled between our routes and Microsoft Edge routers.' },
  { key: 'D', text: 'We use ExpressRoute circuit with private peering configured, and we enabled FastPath when we created the ExpressRoute connection.' },
  { key: 'E', text: 'We have an on-premises datacenter that is connected to two ExpressRoute peering locations to increase overall reliability.' },
  { key: 'F', text: 'When an Azure region supports availability zones, we deploy only ExpressRoute gateways that support zonal deployment, like VpnGw[x]AZ sku.' },
  { key: 'G', text: 'Our on-premises datacenter connects to one or more Hub Virtual Networks/Virtual WAN hubs in a particular Azure region. The total combined bandwidth requires no more than 10Gbps throughput, and we use ExpressRoute through a service provider. When more than 10Gbps is needed, we use ExpressRoute Direct circuits.' },
  { key: 'H', text: 'We use ExpressRoute network insights to monitor our ExpressRoute components (peerings, connections, and gateways).' },

];
const options17: IChoiceGroupOption[] = [
  { key: 'A', text: 'We use only private IP address ranges from RFC 1918 for our private On-premises networks and/or Azure Virtual Networks.' },
  { key: 'B', text: 'We do not use any of the following IP address ranges as Address Space of our Azure or On-Premises networks: 224.0.0.0/4 (multicast), 255.255.255.255/32 (broadcast), 127.0.0.0/8 (loopback), 169.254.0.0/16 (link-local), and 168.63.129.16/32 (internal DNS).' },
  { key: 'C', text: 'We do not create large Azure Virtual Networks like (/16), unless for Landing Zone Virtual Networks hosting services that may require thousands of IP Addresses, such as Azure Kubernetes or Azure Databricks.' },
  { key: 'D', text: 'We use an IP address management solution that helps us to reserve and assign IP addresses ranges and ensure admins do not create networks with IP overlap.' }
];
const options18: IChoiceGroupOption[] = [
  { key: 'A', text: 'We use virtual network injection for supported Azure services to make them available from within your virtual network, and we are locking down the communication within the virtual network by using UDRs and NSGs.' },
  { key: 'B', text: 'When available we always use Private Link Endpoints for Azure PaaS services that do not require public access.' },
  { key: 'C', text: 'When virtual network injection or Private Link Endpoints are not available, we use ExpressRoute with Microsoft peering, and we have restricted the Networks that can reach out to the services separately, in the Firewall setting of each service.' },
  { key: 'D', text: 'When Virtual Network Injection or Private Link Endpoints are not available, we use Service Endpoints. We only enable them on the subnets that really need access to a particular Azure PaaS service, and we only use them when there are no data exfiltration concerns.' },
  { key: 'E', text: 'Our corporate security policy requires that we limit Cross-Tenant Private Link Endpoint connections in Azure, and in order to achieve that we have implemented Azure Policies to meet that requirement.' }

];
const options19: IChoiceGroupOption[] = [
  { key: 'A', text: 'We use Application Gateway v2 for secure delivery of HTTP/S applications and ensure that WAF protection and policies are enabled.' },
  { key: 'B', text: '(Single region) We use Application Gateway v2 (or a partner NVA) and ensure that WAF protection and policies are enabled for secure delivery of external-facing HTTP/S applications, and we deploy them within the landing-zone virtual network and with the applications that they are securing.' },
  { key: 'C', text: '(Multi-region) When using Azure Front Door and Application Gateway v2 to protect HTTP/S applications, we use WAF policies in Front Door and lock Application Gateway down to only receive traffic from Front Door.' },
  { key: 'D', text: 'We have no public facing application.' }
];
const options20: IChoiceGroupOption[] = [
  { key: 'A', text: 'We do not use Azures default internet outbound (SNAT) for any scenario. We use Azure Firewall or a partner NVA to govern Azure outbound traffic to the internet.' },
  { key: 'B', text: 'We use NAT gateway for Online Landing Zones Vnets not connected to the Hub VNet, where compute resources require internet outbound access and do not need any of the security features provided by Azure Firewall or a third-party NVA.' }
];
const options21: IChoiceGroupOption[] = [
  { key: 'A', text: 'We prevent exposure of VM management ports to the internet by using Azure Policy to prevent VM creation with a public IP attached.' },
  { key: 'B', text: 'We use Azure Bastion to access jump-box virtual machines for management purposes.' },
  { key: 'C', text: 'We use Azure DDoS Protection Standard protection plans to help protect all Virtual Networks hosting any resource with a Public IP.' },
  { key: 'D', text: 'We do not replicate on-premises perimeter network concepts and architectures into Azure. Similar security capabilities are available in Azure, but the implementation and architecture must be adapted to the cloud.' }
];
const options22: IChoiceGroupOption[] = [
  { key: 'A', text: 'We use NSGs to help protect traffic across subnets, as well as east/west traffic across the platform (traffic between landing zones).' },
  { key: 'B', text: 'Application teams use application security groups at the subnet-level to help protect multitier VMs within landing zones.' },
  { key: 'C', text: 'We use NSGs and Application Security Groups to micro-segment traffic within the landing zone and avoid using a central NVA to filter traffic flows.' },
  { key: 'D', text: 'We enable NSG flow logs on all critical VNets/subnets in our subscription as an audit-ability and security best practice.' }
];
const options23: IChoiceGroupOption[] = [
  { key: 'A', text: 'We use Azure Firewall Premium or a partner NVA if advanced firewall capabilities are required (TLS inspection, network intrusion detection and prevention system (IDPS), URL filtering, web categories), for all inbound connections and for East/west traffic filtering (when required).' },
  { key: 'B', text: 'When we use Azure Firewall we use Azure Firewall Manager to deploy and manage Azure firewalls across Virtual WAN hubs or in hub virtual networks. When we use partner NVAs, we leverage similar capabilities provided by the vendor of the partner NVA, to deploy, configure and manage them at scale.' },
  { key: 'C', text: 'We have a Global Azure Firewall Policy to govern security posture across the global network environment, and we also use some more granular Azure Firewall policies to meet the requirements of specific regions by delegating incremental firewall policies to local security teams via Azure role-based access control. When using partner NVAs we use similar capabilities provided by the vendor of the partner NVA, to deploy, configure and manage firewall policies at scale.' },
  { key: 'D', text: 'When we use partner NVAs for East/West and/or North/South traffic protection and filtering, for Virtual WAN network topologies we deploy the partner NVAs to a separate virtual network (for example, NVA Vnet), and then we connect it to the regional Virtual WAN hub and to the landing zones that require access to NVAs; and for non-Virtual WAN network topologies (Traditional Virtual Networks), we deploy the partner NVAs in the Hub virtual network.' },
  { key: 'E', text: 'Use Network Watcher packets to capture despite the limited capture window.' },
  { key: 'F', text: 'Use partner solutions for scenarios that require deep packet inspection.' }
];
const options24: IChoiceGroupOption[] = [
  { key: 'A', text: 'We have a delegated zone for name resolution (such as azure.contoso.com)' },
  { key: 'B', text: 'We automatically manage the lifecycle of DNS records for virtual machines deployed in a virtual network by enabling auto-registration for Azure Private DNS.' },
  { key: 'C', text: 'When an environment requires name resolution across on-premises and Azure, we use existing DNS infrastructure (like Active Directory integrated DNS) deployed on at least two VMs. We configure our virtual network DNS settings to use those DNS servers.' },
  { key: 'D', text: 'We use Azure Firewall with DNS proxy or a Virtual Machine as a resolver for cross-premises DNS resolution with Azure Private DNS.' },
  { key: 'E', text: 'We link Azure Private DNS zones to virtual networks, and we use DNS servers as hybrid resolvers with conditional forwarding to on-premises DNS names (for example, corporate.contoso.com). We configure on-premises servers with conditional forwarders to resolver VMs in Azure for our Azure Private DNS zone (for example, azure.contoso.com).' },
  { key: 'F', text: 'We create Azure Private DNS zones within a global connectivity subscription. The zones we create include zones required for accessing Azure PaaS services via a private endpoint (for example, privatelink.database.windows.net, or privatelink.blob.core.windows.net).' },

];
const options25: IChoiceGroupOption[] = [
  { key: 'A', text: 'Select existing' },
  { key: 'B', text: 'Create new' }
];
const options26: IChoiceGroupOption[] = [
  { key: 'A', text: 'We do not retain logs from Azure services.' },
  { key: 'B', text: 'Log retention is ad-hoc and configured manually.' },
  { key: 'C', text: 'Log retention is automated for some resources and manual for others.' },
  { key: 'D', text: 'Log retention is enforced, and Azure logs are sent to an on-premises system.' },
  { key: 'E', text: 'Log retention is enforced, and Azure logs are stored in Azure.' }
];
const options27: IChoiceGroupOption[] = [
  { key: 'A', text: 'We have no mechanism in place to evaluate Azure resource configurations and ensure compliance.' },
  { key: 'B', text: 'Azure resource configuration evaluation for compliance is a manual process.' },
  { key: 'C', text: 'Some Azure resource configurations are automatically audited against documented standards.' },
  { key: 'D', text: 'All Azure resource configurations are automatically audited against documented standards. Remediation activities are done manually.' },
  { key: 'E', text: 'All Azure resource configurations are automatically audited against documented standards. Remediation activities are automated, and/or non-compliant resource deployments are blocked.' }
];
const options28: IChoiceGroupOption[] = [
  { key: 'A', text: 'No usage of management groups, or use of the Tenant Root Management Group only.' },
  { key: 'B', text: 'A single management group on top of the Tenant Root Management Group' },
  { key: 'C', text: 'Management groups reflect organizational hierarchy and departments. The management groups contain associated subscriptions for each department.' },
  { key: 'D', text: 'Management groups reflect applications/services and their various environments (e.g. prod, test, dev).' },
  { key: 'E', text: 'Management groups reflect archetypes built using Azure Policy & RBAC assignments to define different workload requirements. An example of this is the Azure Landing Zone conceptual architecture management group hierarchy.' },
  { key: 'F', text: 'Management Groups reflect archetypes and a "canary" testing hierarchy is in use.' },

];
const options29: IChoiceGroupOption[] = [
  { key: 'A', text: 'No democratization. One subscription for all resources hosted in Azure.' },
  { key: 'B', text: 'Two subscriptions, one for platform shared services and another for applications/workloads.' },
  { key: 'C', text: 'Separate subscriptions for different environments (e.g. prod, test, dev). The subscriptions are shared by all applications/workloads and their teams.' },
  { key: 'D', text: 'Separate subscriptions for each application/workload team. Each team can have multiple subscriptions depending on their particular application/workload requirements.' },
  { key: 'E', text: 'Separate subscriptions for each application/workload team. Each team can have multiple subscriptions depending on their particular application/workload requirements. There are also separate subscriptions for central shared platform services.' }
];
const options30: IChoiceGroupOption[] = [
  { key: 'A', text: 'Manually, by clicking "Add Subscription" in the Azure Portal or EA portal.' },
  { key: 'B', text: 'Manually, by raising a ticket with our partner/CSP to create one.' },
  { key: 'C', text: 'Manually, via an API call (ARM, REST, Bicep, Terraform, etc.), from a manual request (e-mail, ticket from ITSM tool).' },
  { key: 'D', text: 'Automatically, via an API call (ARM, REST, Bicep, Terraform, etc.) triggered through a pipeline/integration tool.' }
];
const options31: IChoiceGroupOption[] = [
  { key: 'A', text: 'We have not defined or documented security requirements for Azure.' },
  { key: 'B', text: 'Some Azure resources are integrated with our security assessment and SIEM solutions.' },
  { key: 'C', text: 'Some Azure subscriptions and resources are integrated with our security assessment and SIEM solutions. Secure resource configurations are defined, but not enforced.' },
  { key: 'D', text: 'All Azure subscriptions and resources are manually integrated with our security assessment and SIEM solutions. Secure resource configurations are defined, but not enforced.' },
  { key: 'E', text: 'All Azure subscriptions and resources are automatically integrated at time of deployment with our security assessment and SIEM solutions. Secure resource configurations are defined and enforced.' }

];
const options32: IChoiceGroupOption[] = [
  { key: 'A', text: 'We have no defined process for evaluating Azure resource types before allowing them in our environment.' },
  { key: 'B', text: 'We assess the security configurations of some Azure services in our environment.' },
  { key: 'C', text: 'We assess the security configurations of most Azure services in our environment.' },
  { key: 'D', text: 'We have a well-defined process for assessing Azure service security configurations as well as monitoring, alerting, and integrating services with existing systems. Secure resource configurations are defined but not enforced.' },
  { key: 'E', text: 'We have a well-defined process for assessing Azure service security configurations as well as monitoring, alerting, and integrating services with existing systems. Secure resource configurations are defined and automatically enforced.' }

];
const options33: IChoiceGroupOption[] = [
  { key: 'A', text: 'Manually, through the Azure Portal.' },
  { key: 'B', text: 'Manually, through imperative tools like Azure PowerShell or Azure CLI.' },
  { key: 'C', text: 'Manually, via declarative Infrastructure-as-Code tools like ARM Template, Bicep, Terraform, etc.' },
  { key: 'D', text: 'Automatically, through a CI/CD pipeline, using imperative tools like Azure PowerShell or Azure CLI. Code is stored centrally in a Git repository.' },
  { key: 'E', text: 'Automatically, through a CI/CD pipeline, using Infrastructure-as-Code tools like ARM Template, Bicep, Terraform, etc. Code is stored centrally in a Git repository.' }

];
const options34: IChoiceGroupOption[] = [
  { key: 'A', text: 'Teams use a CI/CD pipeline (or multiple CI/CD pipelines) and Git repository to deploy to Azure.' },
  { key: 'B', text: 'All teams are encouraged to deploy resources in whatever way fits their requirements for achieving their goals and SLAs, but we prefer they use declarative Infrastructure-as-Code tooling. However they deploy, teams work separately from each other in their own Git repository and CI/CD pipeline (or pipelines), which gives each team autonomy.' },
];
const options35: IChoiceGroupOption[] = [
  { key: 'A', text: 'Audit, AuditIfNotExists, and/or setting "Enforcement Mode" on Policy Assignments to "Disabled" (which achieves same result as the Audit effect for Modify & DeployIfNotExists).' },
  { key: 'B', text: 'Deny, Disabled' },
  { key: 'C', text: 'Append, Modify, DeployIfNotExists' },
];
const options36: IChoiceGroupOption[] = [
  { key: 'A', text: 'A  single central IT team deploys and manages everything in Azure, platform, and applications.' },
  { key: 'B', text: 'A platform team (or teams) deploys and manages platform resources like Management Groups, Policy, RBAC, Hub Networking & Hybrid Connectivity (like VPN/ExpressRoute), Identity, etc. Platform functions might be split further between teams, such as networking resources being managed by a networking team and additional teams being in charge of identity and Azure platform/governance resources.' },
  { key: 'C', text: 'We do not have team structures defined. Everyone has the same access and can deploy whatever they need, wherever they need.' }
];
const options37: IChoiceGroupOption[] = [
  { key: 'A', text: 'We do not track costs for Azure.' },
  { key: 'B', text: 'We track costs at the subscription level.' },
  { key: 'C', text: 'We track costs for some individual workloads.' },
  { key: 'D', text: 'We use a cost management tool to track costs for all workloads.' },
  { key: 'E', text: 'Workload owners use a cost management tool to track their resource costs, and they are responsible for optimizing their spending.' }

];
const options38: IChoiceGroupOption[] = [
  { key: 'A', text: 'We do not tag Azure resources with metadata.' },
  { key: 'B', text: 'Azure resource tagging is ad-hoc and manual.' },
  { key: 'C', text: 'Some Azure resources must have a defined set of tags and are audited for compliance.' },
  { key: 'D', text: 'All azure resources must have a defined set of tags and are audited for compliance.' },
  { key: 'E', text: 'All Azure resources must have a defined set of tags, and we enforce compliance via automation and/or policy.' }

];
const options39: IChoiceGroupOption[] = [
  { key: 'A', text: 'We do not actively review resource utilization for cost optimization opportunities.' },
  { key: 'B', text: 'Some teams review Azure Advisor for recommendations when workload costs exceed expectations.' },
  { key: 'C', text: 'Some teams proactively review Azure Advisor (or a similar tool) recommendations for cost optimization opportunities.' },
  { key: 'D', text: 'Teams proactively review Azure Advisor (or similar tool) recommendations for cost optimization opportunities.' },
  { key: 'E', text: 'Teams proactively review Azure Advisor (or similar tool) recommendations for cost optimization opportunities and also leverage Reserved Instances.' }
];
// Optional styling to make the example look nicer
const comboBoxStyles: Partial<IComboBoxStyles> = { root: { maxWidth: 300 } };
const buttonStyles: Partial<IButtonStyles> = { root: { display: 'block', margin: '10px 0 20px' } };


const OnPremisesConnectivity = () => {
  const comboBoxRef = React.useRef<IComboBox>(null);
  const onOpenClick = React.useCallback(() => comboBoxRef.current?.focus(true), []);
  const stackTokens: IStackTokens = { childrenGap: 20 };
  const sliderAriaValueText = (value: number) => `${value} percent`;
  const sliderValueFormat = (value: number) => `${value}%`;
  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Azure Landing Zone Accelerator</h2>
      <Pivot aria-label="Basic Pivot Example">
        <PivotItem
          headerText="Deployment Location"
          headerButtonProps={{
            'data-order': 1,
            'data-title': 'My Files Title',
          }}
        >
          <ComboBox
            componentRef={comboBoxRef}
            defaultSelectedKey="C"
            label="Directory"
            options={options1}
            styles={comboBoxStyles}
          />
          <ComboBox
            componentRef={comboBoxRef}
            defaultSelectedKey="C"
            label="Region"
            options={options2}
            styles={comboBoxStyles}
          />
        </PivotItem>
        <PivotItem headerText="Azure Billing and Active Directory">
          <Label styles={labelStyles}>This critical design area focuses on the two highest levels of alignment across all of your Azure deployments; your Azure billing offer and the association of that offer with an Azure Active Directory (Azure AD) tenant.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options3} label="Select an Azure Billing Arrangement for your organization." required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options4} label="Which option best describes your current Azure identity services infrastructure?" required={true} />;
        </PivotItem>
        <PivotItem headerText="Identity and access management">
          <Label styles={labelStyles}>This critical design area establishes a foundation for the management of identity and access.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options5} label="Which services/features do you use to authenticate and authorize access to Azure resources?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options6} label="Which users do you apply those selected services/features to?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options7} label="Have you implemented and configured emergency access accounts (aka break glass accounts) for Azure AD?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options8} label="Which option describes your current monitoring, logging, and alerting implementation for authentication, authorization and activity in Azure AD and Azure Subscriptions?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options9} label="How do external users, like partners, gain access to manage your Azure resources within your Azure subscriptions?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options10} label="Which of the following practices do you use when you grant access to resources in your Azure environments via Azure RBAC (IAM)?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options11} label="Which of the following practices do you use when you define Azure RBAC (IAM) roles to assign to identities?" required={true} />;
          <Toggle label="Assign recommended policies to govern identity and domain controllers" defaultChecked onText="Yes" offText="No" onChange={_onChange} />
          <Label styles={labelStyles}>Identity subscription</Label>
          <ComboBox
            componentRef={comboBoxRef}
            defaultSelectedKey="C"
            label="Subscription"
            options={options12}
            styles={comboBoxStyles}
          />
          <Toggle label="Prevent inbound RDP from internet" defaultChecked onText="Yes" offText="No" onChange={_onChange} />
          <Toggle label="Ensure subnets are associated with NSG" defaultChecked onText="Yes" offText="No" onChange={_onChange} />
          <Toggle label="Prevent usage of public IP" defaultChecked onText="Yes" offText="No" onChange={_onChange} />
          <Toggle label="Ensure Azure VMs (Windows and Linux) are enabled for Azure Backup" defaultChecked onText="Yes" offText="No" onChange={_onChange} />

        </PivotItem>
        <PivotItem headerText="Network topology and connectivity">
          <Label styles={labelStyles}>The Network Topology and Connectivity design area is critical for establishing a foundation for your cloud network design.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options14} label="Our organization created a Hub and Spoke topology using Virtual Networks, and the following statements are true about our requirements/environment:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options15} label="Our organization created a Global Network using Azure VWAN, and the following statements are true about our requirements/deployment:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options16} label="The following statements about our connectivity to Azure are true:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options17} label="The following statements about our strategy for assigning IP addresses to Azure, on-premises, and other cloud providers are true:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options18} label="The following statements about our connectivity to Azure PaaS services are true:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options19} label="The following statements are true about how we secure our workloads from inbound HTTP/S connectivity from the internet:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options20} label="The following statements are true about our requirements and strategy for Outbound Internet access:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options21} label="The following statements are true about our requirements and strategy for our inbound and outbound internet connectivity:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options22} label="The following statements are true about our requirements and strategy of how we implement NSG to protect traffic across subnets, as well as east-west traffic across the platform." required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options23} label="The following statements are true about our requirements and strategy for Traffic Inspection:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options24} label="The following statements about our central DNS name resolution implementation are true:" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options13} label="Deploy networking topology" required={true} />;
        </PivotItem>

        <PivotItem headerText="Resource organization">
          <Label styles={labelStyles}>The critical resource organization design area establishes consistent patterns for organizing resources deployed to the cloud.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options28} label="Which option best describes your current usage of Management Groups?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options29} label="Which of these options best describes your current usage of Subscriptions and how you democratize their usage?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options30} label="How do you currently create/provision subscriptions within your environment?" required={true} />;
          <TextField label="Management Group prefix" />
          <Toggle label="Select dedicated subscriptions or single subscription for platform resources" defaultChecked onText="Dedicated(recommended)" offText="Single" onChange={_onChange} />
          <Label styles={labelStyles}>Telemetry Tracking Using Customer Usage Attribution (PID).</Label>
          <Toggle label=" Customer Usage Selection Options" defaultChecked onText="Enabled" offText="Disabled" onChange={_onChange} />
        </PivotItem>

        <PivotItem headerText="Governance">
          <Label styles={labelStyles}>Azure governance establishes the tooling needed to support cloud governance, compliance auditing, and automated guardrails.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options37} label=" How do you track costs for Azure resources?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options38} label=" How do you use Azure resource tagging within your environment?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options39} label=" How do you ensure you're optimizing your spending on Azure services?" required={true} />;
        </PivotItem>

        <PivotItem headerText="Management">
          <Label styles={labelStyles}>This design area establishes a foundation for operations management across your Azure, hybrid, or multicloud environments.</Label>
          <Label styles={labelStyles}>Azure Landing Zones will create the management group hierarchy under the Tenant Root Group with the prefix provided at this step.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options26} label="How do you retain logs for insights and analytics?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options27} label="How do you ensure Azure resource configurations are compliant with organizational and regulatory standards?" required={true} />;
          <Toggle label=" Deploy Log Analytics workspace and enable monitoring for your platform and resources" defaultChecked onText="Enabled" offText="Disabled" onChange={_onChange} />
          <Slider label="Log Analytics Data Retention in days" min={0} max={30} step={1} defaultValue={20} showValue snapToStep />
          <Label styles={labelStyles}>Management Subscription</Label>
          <ComboBox
            componentRef={comboBoxRef}
            defaultSelectedKey="C"
            label="Subscription"
            options={options12}
            styles={comboBoxStyles}
          />
          <Label styles={labelStyles}>Select which Azure Monitor solutions you will enable for your Log Analytics workspace
          </Label>
          <Toggle label="Deploy Agent Health solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy Change Tracking solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy Update Management solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy Activity Log solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy VM Insights solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy Service Map solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy SQL Assessment solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy SQL Vulnerability Assessment solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy SQL Advanced Threat Protection solution" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
        </PivotItem>

        <PivotItem headerText="Security">
          <Label styles={labelStyles}>This design area creates a foundation for security across your Azure, hybrid, and multi-cloud environments.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options31} label="How do you meet your security requirements in Azure?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options32} label="How do you determine whether to allow Azure services in your environment or not?" required={true} />;
          <Label styles={labelStyles}>Select which Microsoft Defender for Cloud solutions you will enable.</Label>
          <Toggle label="Deploy Microsoft Defender for Cloud and enable security monitoring for your platform and resources" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <TextField label="Microsoft Defender for Cloud Email Contact" />
          <Toggle label="Enable Microsoft Defender for Cloud for servers" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for open-source relational databases" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for AppServices" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for Storage" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for Azure SQL Database" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for SQL servers on machines" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for Key Vault" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for Azure Resource Manager" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for DNS" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for Containers (Kubernetes and Container Registries)" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Enable Microsoft Defender for Cloud for Key Vault" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
          <Toggle label="Deploy Microsoft Sentinel" defaultChecked onText="Yes(recommended)" offText="No" onChange={_onChange} />
        </PivotItem>

        <PivotItem headerText="Platform automation and DevOps">
          <Label styles={labelStyles}>Platform automation and DevOps evaluate opportunities to modernize your approach to environmental deployment with infrastructure as code options.</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options33} label="How do you manage and deploy changes to your Azure Landing Zone environment(s)?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options34} label="How do different teams work together and deploy and manage their Azure resource deployments?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options35} label="Which Azure Policy effect(s) do you use in your Azure Landing Zones environment to control and audit subscriptions and their resources?" required={true} />;
          <ChoiceGroup defaultSelectedKey="B" options={options36} label="How do your structure your teams internally, and how do they interact to deploy and manage Azure?" required={true} />;
          <Toggle label="Deploy integrated CICD pipeline?" defaultChecked onText="Yes" offText="No" onChange={_onChange} />
          <Toggle label=" Select CICD option" defaultChecked onText="Github Actions" offText="No" onChange={_onChange} />
          <TextField label="GitHub organization or username" />
          <TextField label="New GitHub repository name" />
          <TextField label="GitHub personal access token" />
          <Label styles={labelStyles}>Service Principal</Label>
          <ChoiceGroup defaultSelectedKey="B" options={options25} label="Service Principal Type" required={true} />;
        </PivotItem>
      </Pivot>

    </div>
  );
}
export default OnPremisesConnectivity;
// new 

const tokens = {
  sectionStack: {
    childrenGap: 10,
  },
  headingStack: {
    childrenGap: 5,
  },
};

/*export const TextWrapExample = () => (
  <Stack tokens={tokens.sectionStack}>
    <Stack tokens={tokens.headingStack}>
      <Text variant={'large'} block>
        Wrap (Default)
      </Text>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </Stack>
    <Stack tokens={tokens.headingStack}>
      <Text variant={'large'} block>
        No Wrap
      </Text>
      <Text nowrap>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
        laborum.
      </Text>
    </Stack>
  </Stack>
  
);*/

function _onChange(ev: React.MouseEvent<HTMLElement>, checked?: boolean) {
  console.log('toggle is ' + (checked ? 'checked' : 'not checked'));
}

