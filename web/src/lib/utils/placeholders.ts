/**
 * SPDX-License-Identifier: BSD-2-Clause
 *
 * Copyright (c) 2025 The FreeBSD Foundation.
 *
 * This software was developed by Hayzam Sherif <hayzam@alchemilla.io>
 * of Alchemilla Ventures Pvt. Ltd. <hello@alchemilla.io>,
 * under sponsorship from the FreeBSD Foundation.
 */

export const fstabPlaceholder = `devfs      /<pool>/<dataset-path>/jails/<jail-id>/dev     devfs       rw      0       0
<pool>/<dataset-path>/extra/dataset     /<pool>/<dataset-path>/jails/<jail-id>/mnt/data        nullfs      rw      0       0`;

export const jailOptionsPlaceholder = `exec.poststop = "echo 'Jail <jail-name> has been stopped' >> /var/log/jail_events.log"`;
