---
title: How to use LinuxDBAssistant
---
::: warning
Installing Linux, specially with this method, is risky and can accidentally overwrite your data.
Make backups of your data before proceeding.
:::
- Choose your distro, if you haven´t decided on what distro yet, choose your distro with the function in LinuxDBAssistant.
- After choosing your Distro, make sure it isn´t on the [list of unsupported distros](/linuxdbassistant/unsupported-distros)
- Download the ISO of your distro, preferlably with a torrent client like [qBitTorrent](https://www.qbittorrent.org/) if available.
- Open Disk Management or MiniTool Partition Wizard, and shrink enough space for the extracted contents of the ISO and the Linux Distro and the things you are gonna use.
- Create a partition 500mb bigger than your ISO. (If it doesn´t fit make a bigger and bigger one until the extracted contents fit.)
- Extract the ISO with the extract ISO function.
- Use the Change LocalTime to UTC Time option if you don´t want the pain of having to sync the time every time you reboot to another os.
::: warning
Using the Change LocalTime to UTC Time option is dangerous, because it changes registry values.
Use this option at your own risk.
:::
- Reboot to Windows Recovery by either holding shift while clicking the restart button, or using the Reboot to Windows Recovery function.
- Go to the 2nd option, choose UEFI OS, and congratulations, you´ve booted to the installation enviroment!
- I´d recommend, that after the installation, you delete the partition where the ISO is, to avoid confusion with systemd-boot if your distro uses it (systemd-boot shows up as UEFI OS) and to free up space. And then extend one of the partitions (The C: Drive or the Root Drive) with Disk Management or MiniTool Partition Wizard.