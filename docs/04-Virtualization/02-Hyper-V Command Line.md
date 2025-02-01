---
description: Hyper-V Command Line
tags:
    - Virtualization
    - Hyper-V
---


# 使用 Hyper-V 和 Windows PowerShell
## 傳回虛擬機清單
1.在 PowerShell 中執行下列命令：
```PowerShell
Get-VM
```
2.若要傳回僅提供電源的虛擬機清單，請將篩選新增至 Get-VM 命令。 您可以使用 命令來新增 Where-Object 篩選。
```PowerShell
Get-VM | where {$_.State -eq 'Running'}
```
## 建立虛擬機檢查點

若要使用PowerShell建立檢查點，請使用 命令選取虛擬機 `Get-VM` ， `Checkpoint-VM` 並將此管線傳送至命令。 最後，使用 `-SnapshotName`提供檢查點的名稱。 完整的命令如下所示：

```PowerShell
Get-VM -Name <VM Name> | Checkpoint-VM -SnapshotName <name for snapshot>
```