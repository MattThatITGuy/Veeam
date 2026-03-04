// =============================================================================
// Veeam Hypervisor Feature Explorer — Data File
// =============================================================================
// This file is the only thing you need to edit when Veeam releases updates.
// The index.html framework reads this file and renders everything automatically.
//
// LAST UPDATED: Feb 2026 — Veeam Data Platform Feature Comparison datasheet
// TODO: Verify partial support notes with SE team before publishing
//
// HOW TO ADD A NEW FEATURE:
//   1. Find the right category in CATEGORIES below
//   2. Add a new object to its `features` array using this template:
//
//      {
//        name: 'Feature Name',
//        isNew: true,              // shows a NEW badge — set false once it's not new
//        edition: null,            // null | 'advanced' | 'premium'
//        desc: 'One-line description shown under the feature name.',
//        support: {
//          vsphere:   'full',      // 'full' | 'partial' | 'none'
//          hyperv:    'full',
//          nutanix:   'partial',
//          proxmox:   'none',
//          scalecomp: 'none',
//          rhv:       'none',
//        },
//        partialNotes: {           // only needed if any support value is 'partial'
//          nutanix: 'Explain exactly what works and what doesn\'t for Nutanix.',
//        }
//      },
//
// HOW TO ADD A NEW HYPERVISOR:
//   1. Add an entry to HYPERVISORS below
//   2. Add that hypervisor's id as a key in every feature's `support` object
//
// HOW TO ADD A NEW CATEGORY:
//   1. Add an entry to CATEGORIES below with a unique `id` and `label`
//   2. Populate its `features` array
// =============================================================================


// ── HYPERVISORS ───────────────────────────────────────────────────────────────
// Each entry defines one column in the comparison table.
//
// Fields:
//   id        — internal key, must match the keys used in feature `support` objects
//   name      — full display name (used in tooltips / aria)
//   short     — short name shown in the HV selector card
//   color     — brand color for the dot and column header
//   abbr      — 2-3 letter abbreviation shown in the HV card badge

const HYPERVISORS = [
  { id: 'vsphere',   name: 'VMware vSphere',          short: 'vSphere',     color: '#607196', abbr: 'VS'  },
  { id: 'hyperv',    name: 'Microsoft Hyper-V',        short: 'Hyper-V',     color: '#0078d4', abbr: 'HV'  },
  { id: 'nutanix',   name: 'Nutanix AHV',              short: 'Nutanix AHV', color: '#024fa1', abbr: 'AHV' },
  { id: 'proxmox',   name: 'Proxmox VE',               short: 'Proxmox VE',  color: '#e57000', abbr: 'PX'  },
  { id: 'scalecomp', name: 'Scale Computing HyperCore', short: 'HyperCore',  color: '#6b35c7', abbr: 'SC'  },
  { id: 'rhv',       name: 'OLVM / Red Hat Virt.',     short: 'OLVM/RHV',    color: '#cc0000', abbr: 'RHV' },
];


// ── CATEGORIES ────────────────────────────────────────────────────────────────
// Each category maps to a section in the sidebar and a table in the content area.
//
// Support values:  'full' = ✓   'partial' = ◐   'none' = —
// Edition values:  null | 'advanced' | 'premium'

const CATEGORIES = [

  // ── BACKUP ──────────────────────────────────────────────────────────────────
  {
    id: 'backup',
    label: 'Backup',
    features: [
      {
        name: 'Image-based VM Backup',
        isNew: false, edition: null,
        desc: 'Agentless, image-level backup of VMs and data',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
      {
        name: 'Application-aware Backups',
        isNew: false, edition: null,
        desc: 'App-consistent backups with transaction log support',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'App-consistent backup is supported via VSS/scripts, but transaction log backup for Oracle, PostgreSQL, and SQL Server is not available.',
          scalecomp: 'App-consistent backup via guest interaction is supported, but transaction log backup for databases is not available on HyperCore.',
          rhv:       'App-consistent backup is supported via guest interaction, but transaction log backup for Oracle, PostgreSQL, and SQL Server requires additional configuration and may be limited.',
        },
      },
      {
        name: 'Backup from Storage Snapshots',
        isNew: false, edition: null,
        desc: 'Leverage storage array snapshots to minimize production impact',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Primary Snapshot Orchestration',
        isNew: false, edition: null,
        desc: 'Orchestrate snapshots on primary and secondary storage arrays',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Backup Copy Jobs',
        isNew: false, edition: null,
        desc: 'Automated copy of backups to DR storage with validation',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
      {
        name: 'NAS Backup',
        isNew: false, edition: null,
        desc: 'Protect SMB and NFS file shares at scale',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
      {
        name: 'VMware Cloud Director Backup',
        isNew: false, edition: null,
        desc: 'vApp and VM metadata backup with direct restore to vCloud',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
    ],
  },

  // ── REPLICATION ─────────────────────────────────────────────────────────────
  {
    id: 'replication',
    label: 'Replication',
    features: [
      {
        name: 'Image-based VM Replication',
        isNew: false, edition: null,
        desc: 'Periodic on-site HA or off-site DR replication',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Continuous Data Protection (CDP)',
        isNew: false, edition: 'advanced',
        desc: 'Near-zero RPO for Tier-1 workloads with built-in CDP',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Universal CDP',
        isNew: true, edition: 'advanced',
        desc: 'CDP for any Windows machine replicating to VMware vSphere',
        support: { vsphere: 'full', hyperv: 'partial', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
        partialNotes: {
          hyperv: 'Hyper-V VMs can act as a CDP replication source targeting VMware vSphere via Cloud Connect, but Hyper-V is not a supported CDP target platform.',
        },
      },
      {
        name: 'Replication from Backup',
        isNew: false, edition: null,
        desc: 'Create replicas from backup files without impacting production',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Veeam Cloud Connect Replication',
        isNew: false, edition: null,
        desc: 'Secure cloud-based DRaaS through Veeam-powered providers',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'One-click Failover Orchestration',
        isNew: false, edition: null,
        desc: 'Built-in failover plan orchestration for minimal downtime',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'VMware Cloud Director Replication',
        isNew: false, edition: null,
        desc: 'vApp replication within and across vCD instances',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
    ],
  },

  // ── INSTANT RECOVERY ────────────────────────────────────────────────────────
  {
    id: 'instant_recovery',
    label: 'Instant Recovery',
    features: [
      {
        name: 'Instant VM Recovery',
        isNew: false, edition: null,
        desc: 'Run any backup instantly as a live VM',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Instant Recovery to Microsoft Azure',
        isNew: true, edition: null,
        desc: 'Recover VMs from backup as Azure VMs within moments',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Instant Disk Recovery',
        isNew: false, edition: null,
        desc: 'Restore only required disks of large VMs instantly',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Instant Database Recovery',
        isNew: false, edition: null,
        desc: 'Instantly recover SQL Server or Oracle DBs to any server',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'Instant recovery is available for SQL Server and Oracle databases hosted on VMs, but requires the database to be accessible via a Veeam Agent or image-level backup with app-aware processing enabled.',
          scalecomp: 'Database instant recovery is supported via image-level backups with guest interaction, but native HyperCore integration is limited — agent-based backup is recommended for reliable database recovery.',
          rhv:       'Instant database recovery works via image-level backups with app-aware processing. Native OLVM/RHV integration is limited; Veeam Agent deployment inside VMs is recommended for optimal results.',
        },
      },
      {
        name: 'Entire VM Restore',
        isNew: false, edition: null,
        desc: 'Full restore of VMs to original or new location',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
      {
        name: 'Direct Restore to AWS / Azure / GCP',
        isNew: false, edition: null,
        desc: 'Migrate or restore on-prem VMs directly to cloud',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'partial', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
        partialNotes: {
          nutanix: 'Direct restore to AWS, Azure, and GCP is supported from Nutanix AHV image-level backups, but cross-platform restore (AHV → cloud) may require additional disk format conversion steps compared to vSphere/Hyper-V workflows.',
        },
      },
    ],
  },

  // ── GRANULAR RECOVERY ───────────────────────────────────────────────────────
  {
    id: 'granular',
    label: 'Granular Recovery',
    features: [
      {
        name: 'File-level Recovery',
        isNew: false, edition: null,
        desc: 'Directly recover files from Windows, Linux, macOS, and more',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
      {
        name: 'Guest File System Indexing',
        isNew: false, edition: null,
        desc: 'File catalog enabling search-and-restore without knowing location',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'partial', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
        partialNotes: {
          nutanix: 'File system indexing is supported for Nutanix AHV VMs, but archival catalog integration (for searching across aged-out backups) and one-click restore directly from search results may require additional configuration.',
        },
      },
      {
        name: 'Veeam Explorer for Microsoft AD',
        isNew: false, edition: null,
        desc: 'Granular AD object restore including users, groups, passwords',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'Single user and computer account restore (including passwords) and LDIFDE export are supported. Multi-select restore, container restore, GPO restore, AD-integrated DNS records, and Configuration Partition objects are not available.',
          scalecomp: 'Single user and computer account restore (including passwords) and LDIFDE export are supported. Multi-select restore, container restore, GPO restore, AD-integrated DNS records, and Configuration Partition objects are not available.',
          rhv:       'Single user and computer account restore (including passwords) and LDIFDE export are supported. Multi-select restore, container restore, GPO restore, AD-integrated DNS records, and Configuration Partition objects are not available.',
        },
      },
      {
        name: 'Veeam Explorer for Microsoft Exchange',
        isNew: false, edition: null,
        desc: 'Item-level recovery for emails, calendar, contacts, and more',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'Item-level recovery of emails, appointments, contacts, and notes is supported. Restore back to the original mailbox is not supported — export to PST or alternate mailbox only.',
          scalecomp: 'Item-level recovery of Exchange items is supported via image-level backups. Restore back to the original mailbox is not supported — export to PST or alternate mailbox only.',
          rhv:       'Item-level recovery of Exchange items is supported via image-level backups. Restore back to the original mailbox is not supported — export to PST or alternate mailbox only.',
        },
      },
      {
        name: 'Veeam Explorer for SQL Server',
        isNew: false, edition: null,
        desc: 'Point-in-time database and object recovery',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'Local, point-in-time SQL database file restores are supported. Agentless transaction log backup and replay, and transaction-level recovery of SQL objects (tables, stored procedures, views) back to the original or new SQL Server are not available.',
          scalecomp: 'Local, point-in-time SQL database file restores are supported. Agentless transaction log backup and replay, and transaction-level recovery of SQL objects back to the original or new SQL Server are not available.',
          rhv:       'Local, point-in-time SQL database file restores are supported. Agentless transaction log backup and replay, and transaction-level recovery of SQL objects back to the original or new SQL Server are not available.',
        },
      },
      {
        name: 'Veeam Explorer for SharePoint',
        isNew: false, edition: null,
        desc: 'Granular recovery of SharePoint items and entire sites',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'SharePoint item restore via save, send, and export is supported. Full site restore and restore to the original location are not supported.',
          scalecomp: 'SharePoint item restore via save, send, and export is supported. Full site restore and restore to the original location are not supported.',
          rhv:       'SharePoint item restore via save, send, and export is supported. Full site restore and restore to the original location are not supported.',
        },
      },
      {
        name: 'Veeam Explorer for Oracle',
        isNew: false, edition: null,
        desc: 'Transaction-log backup, archived log management, point-in-time',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'Oracle database restore to original or new server is supported via image-level backups. Full transaction log backup, archived log management, and transaction-level recovery are best achieved by pairing with the Veeam Plug-in for Oracle RMAN.',
          scalecomp: 'Oracle restore is supported via image-level backups with guest interaction. Transaction log backup and archived log management are not natively available — the Veeam Plug-in for Oracle RMAN is recommended for full coverage.',
          rhv:       'Oracle restore is supported via image-level backups with guest interaction. Transaction log backup and archived log management are not natively available — the Veeam Plug-in for Oracle RMAN is recommended for full coverage.',
        },
      },
      {
        name: 'Veeam Explorer for Storage Snapshots',
        isNew: false, edition: null,
        desc: 'Restore VMs, guest files, and app items from storage snapshots',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
    ],
  },

  // ── SECURITY ────────────────────────────────────────────────────────────────
  {
    id: 'security',
    label: 'Security',
    features: [
      {
        name: 'Malware Detection',
        isNew: false, edition: null,
        desc: 'Scan during backup; flag suspicious, infected, or clean',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
      {
        name: 'YARA Scan',
        isNew: false, edition: 'advanced',
        desc: 'Content scan in SureBackup, Secure Restore, and on-demand (Advanced+)',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'YARA scanning is available on-demand via Scan Backup functionality for image-level backups. Integration within SureBackup automated verification is not available for Proxmox VE.',
          scalecomp: 'YARA scanning can be performed on backup content via Scan Backup, but SureBackup-integrated automated YARA scanning is not supported for HyperCore environments.',
          rhv:       'YARA scanning is available via Scan Backup for image-level backups. Automated YARA scanning within SureBackup workflows is not supported for OLVM/RHV.',
        },
      },
      {
        name: 'Secure Restore',
        isNew: false, edition: null,
        desc: 'Optional AV / YARA scan before recovery to uncompromised state',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          proxmox:   'Antivirus scan before restore is supported. YARA scan as part of Secure Restore requires Advanced or Premium edition and may have limited automation compared to vSphere/Hyper-V workflows.',
          scalecomp: 'Antivirus scan before restore is supported for image-level backups. YARA-based Secure Restore requires Advanced/Premium edition; full workflow automation is more limited than on vSphere.',
          rhv:       'Antivirus scan before restore is supported. YARA scan integration within Secure Restore requires Advanced/Premium edition and has reduced automation capabilities compared to vSphere/Hyper-V.',
        },
      },
      {
        name: 'SureBackup (Automated Verification)',
        isNew: false, edition: null,
        desc: 'Run VMs from backup in isolated env to verify recoverability',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'SureReplica',
        isNew: false, edition: null,
        desc: 'Automated replica verification in fenced-off environment',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Immutability (Hardened Repo)',
        isNew: false, edition: null,
        desc: 'Immutable backups resistant to ransomware deletion/encryption',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
      {
        name: 'End-to-end AES-256 Encryption',
        isNew: false, edition: null,
        desc: 'At-source, in-flight, and at-rest encryption',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'full', rhv: 'full' },
      },
    ],
  },

  // ── DATALABS ────────────────────────────────────────────────────────────────
  {
    id: 'datalabs',
    label: 'DataLabs',
    features: [
      {
        name: 'SureBackup',
        isNew: false, edition: null,
        desc: 'Verify every backup in isolated fenced-off environment',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'On-Demand Sandbox',
        isNew: false, edition: null,
        desc: 'Run VMs from backup in isolation for testing and training',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'On-Demand Sandbox from Storage Snapshots',
        isNew: false, edition: null,
        desc: 'Full I/O performance sandbox from storage snapshots',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Staged Restore',
        isNew: false, edition: 'advanced',
        desc: 'Sanitize sensitive data before restoring to production',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Data Integration API',
        isNew: false, edition: null,
        desc: 'Mount backups for third-party use: data mining, compliance, etc.',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'partial', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
        partialNotes: {
          nutanix: 'The Data Integration API can mount Nutanix AHV image-level backups for third-party access, but some advanced mount options and disk-level publishing features available on vSphere/Hyper-V may not be fully supported.',
        },
      },
    ],
  },

  // ── RECOVERY ORCHESTRATION ──────────────────────────────────────────────────
  {
    id: 'orchestration',
    label: 'Recovery Orchestration',
    features: [
      {
        name: 'Orchestration for VMware vSphere',
        isNew: false, edition: 'premium',
        desc: 'End-to-end cross-platform orchestrated recovery and planned migration',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Orchestration for Hyper-V / Azure Local',
        isNew: false, edition: 'premium',
        desc: 'Recover from Hyper-V backups; cross-platform migration support',
        support: { vsphere: 'none', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'One-Click Mass Recovery',
        isNew: false, edition: 'premium',
        desc: 'Securely recover single app or entire site with one click',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Recovery to Cloud (Azure)',
        isNew: false, edition: 'premium',
        desc: 'Orchestrated direct restore as Azure VMs with automated mapping',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'DataLab Management',
        isNew: false, edition: 'premium',
        desc: 'Automated DR testing in isolated networks with detailed reporting',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'CDP Replica Plan Testing',
        isNew: false, edition: 'premium',
        desc: 'Zero-impact CDP replica testing with full VRO reporting',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
    ],
  },

  // ── MONITORING & ANALYTICS ──────────────────────────────────────────────────
  {
    id: 'monitoring',
    label: 'Monitoring & Analytics',
    features: [
      {
        name: 'Performance Monitoring & Alerting',
        isNew: false, edition: null,
        desc: 'Backup job stats, latest state, unlimited VBR servers (Veeam ONE)',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'full', scalecomp: 'partial', rhv: 'partial' },
        partialNotes: {
          scalecomp: 'Backup job monitoring and alerting is available via Veeam ONE, but infrastructure-level performance metrics and host/datastore visibility specific to HyperCore are limited compared to vSphere and Hyper-V.',
          rhv:       'Backup job monitoring and alerting is available via Veeam ONE. Infrastructure-level performance graphs and host/VM-level metrics for OLVM/RHV are more limited than the dedicated vSphere and Hyper-V reporting packs.',
        },
      },
      {
        name: 'Virtual Infrastructure Assessment',
        isNew: false, edition: null,
        desc: 'Best-practice verification for your virtual infrastructure',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Capacity Planning Reports',
        isNew: false, edition: 'advanced',
        desc: 'Forecast when resources hit minimum levels; load balancing recs',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
      {
        name: 'Veeam ONE Heatmaps',
        isNew: false, edition: null,
        desc: 'Real-time visibility into backup proxies and repositories',
        support: { vsphere: 'full', hyperv: 'full', nutanix: 'full', proxmox: 'partial', scalecomp: 'none', rhv: 'partial' },
        partialNotes: {
          proxmox: 'Heatmaps for backup proxies and repositories are available, but VM-level and host-level resource utilization heatmaps specific to Proxmox VE infrastructure are not supported.',
          rhv:     'Proxy and repository heatmaps are available. Heatmap views for OLVM/RHV host and VM resource utilization are limited compared to the dedicated vSphere and Hyper-V infrastructure views.',
        },
      },
      {
        name: 'VMware Cloud Director Monitoring',
        isNew: false, edition: null,
        desc: 'Availability and configuration tracking for virtual data centers',
        support: { vsphere: 'full', hyperv: 'none', nutanix: 'none', proxmox: 'none', scalecomp: 'none', rhv: 'none' },
      },
    ],
  },

];
