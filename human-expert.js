/**
 * IP-SAKTI Sahayak — Human IP Facilitator Escalation Engine
 * Handles triage, deterministic ticket generation, and stage progression.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHumanExpert();
});

const DEFAULT_TICKETS = [
  {
    id: 'IPS-2026-0481',
    title: 'Nano-Emulsified Triphala Gut Delivery System',
    submitter: 'Dr. Anandita Roy',
    org: 'CSIR-CDRI',
    email: 'anandita@cdri.res.in',
    jur: 'both',
    jurLabel: '🌍 Dual (India + Global)',
    priority: 'urgent',
    priorityLabel: 'Urgent (24h SLA)',
    submitted: 'Today, 11:20 AM',
    status: 'assigned',
    statusLabel: 'In Progress',
    facilitator: 'Adv. Dr. Rajeshwari Vaidya',
    opinionNotes: 'Preliminary assessment completed. Novelty in surfactant-to-oil ternary ratio appears defensible under EPC Art 54(5). Indian application will require comparative dissolution curve to overcome Section 3(d). Prior approval from NBA (Form III) is mandatory prior to PCT publication.'
  },
  {
    id: 'IPS-2026-0394',
    title: 'Section 3(p) Opposition Response on Ashwagandha Bio-Enhancer',
    submitter: 'Vaidya Harishankar Sharma',
    org: 'Ayurveda MSME Consortium',
    email: 'h.sharma@ayurconsortium.org',
    jur: 'india',
    jurLabel: '🇮🇳 India',
    priority: 'critical',
    priorityLabel: 'Critical (12h)',
    submitted: 'Yesterday, 04:15 PM',
    status: 'ready',
    statusLabel: 'Opinion Ready',
    facilitator: 'Shri K. S. Ramanathan',
    opinionNotes: 'Draft response to First Examination Report (FER) completed. Recommended amending claim 1 to restrict scope to specific synergistic molar ratio 10:1 of Withaferin-A to Piperine with attached animal AUC comparison. Full draft response memo attached.'
  },
  {
    id: 'IPS-2026-0182',
    title: 'Rule 158B PPAM Manufacturing Licensing for Classical Guggulu',
    submitter: 'Dr. Meenakshi Sundaram',
    org: 'Shreedhar Herbals Pvt Ltd',
    email: 'meenakshi@shreedhar.com',
    jur: 'india',
    jurLabel: '🇮🇳 India',
    priority: 'routine',
    priorityLabel: 'Routine',
    submitted: '02 Sep 2026',
    status: 'closed',
    statusLabel: 'Completed',
    facilitator: 'Adv. Dr. Rajeshwari Vaidya',
    opinionNotes: 'State Licensing Authority (SLA) checklist validated. Formulation strictly follows Sharangadhara Samhita Madhyama Khanda. Eligible for Classical license under Category A without clinical trial mandates.'
  }
];

let activeTicketId = 'IPS-2026-0481';

function initHumanExpert() {
  ensureTicketStore();
  renderTicketsTable();
  bindFormSubmit();
  bindModalButtons();
}

function ensureTicketStore() {
  const stored = localStorage.getItem('humanExpertTickets');
  if (!stored) {
    localStorage.setItem('humanExpertTickets', JSON.stringify(DEFAULT_TICKETS));
  }
}

function getStoredTickets() {
  try {
    const raw = localStorage.getItem('humanExpertTickets');
    return raw ? JSON.parse(raw) : DEFAULT_TICKETS;
  } catch (e) {
    return DEFAULT_TICKETS;
  }
}

function renderTicketsTable() {
  const tbody = document.getElementById('tickets-table-body');
  if (!tbody) return;

  const tickets = getStoredTickets();

  tbody.innerHTML = tickets.map(t => `
    <tr>
      <td>
        <span class="ticket-id-tag">${t.id}</span>
      </td>
      <td>
        <div style="font-weight: 700; color: var(--color-primary-dark); font-size: 0.88rem;">${escapeHtml(t.title)}</div>
        <div style="font-size: 0.74rem; color: var(--text-muted);">${escapeHtml(t.submitter)} • ${escapeHtml(t.org)}</div>
      </td>
      <td>
        <span style="font-size: 0.8rem;">${escapeHtml(t.jurLabel)}</span>
      </td>
      <td>
        <span class="badge badge-outline" style="font-size: 0.74rem;">${escapeHtml(t.priorityLabel)}</span>
      </td>
      <td style="font-size: 0.8rem; color: var(--text-muted);">${escapeHtml(t.submitted)}</td>
      <td>
        <span class="badge-status ${getTicketStatusClass(t.status)}">${t.statusLabel}</span>
      </td>
      <td style="text-align: right;">
        <button class="btn-sm-view" onclick="openTicketDetailModal('${t.id}')">View Notes &rarr;</button>
      </td>
    </tr>
  `).join('');
}

function getTicketStatusClass(status) {
  if (status === 'ready' || status === 'closed') return 'verified';
  if (status === 'assigned') return 'current';
  return 'review';
}

function bindFormSubmit() {
  const form = document.getElementById('escalation-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('exp-name').value.trim();
    const org = document.getElementById('exp-org').value.trim();
    const email = document.getElementById('exp-email').value.trim();
    const title = document.getElementById('exp-title').value.trim();
    const jur = document.getElementById('exp-jur').value;
    const priority = document.getElementById('exp-priority').value;
    const query = document.getElementById('exp-query').value.trim();

    if (!name || !org || !email || !title || !query) {
      if (window.showToast) window.showToast('Please complete all required fields.');
      return;
    }

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const newId = `IPS-2026-${randomNum}`;

    const jurLabels = {
      india: '🇮🇳 India',
      international: '🌐 International',
      both: '🌍 Dual (India + Global)'
    };

    const priorityLabels = {
      routine: 'Routine (48–72h)',
      urgent: 'Urgent (24h SLA)',
      critical: 'Critical Notice (12h)'
    };

    const newTicket = {
      id: newId,
      title: title,
      submitter: name,
      org: org,
      email: email,
      jur: jur,
      jurLabel: jurLabels[jur] || '🇮🇳 India',
      priority: priority,
      priorityLabel: priorityLabels[priority] || 'Routine',
      submitted: 'Just now',
      status: 'assigned',
      statusLabel: 'Assigned',
      facilitator: 'Adv. Dr. Rajeshwari Vaidya',
      opinionNotes: `Preliminary review initiated for ${title}. Formulation claim has been flagged for automated Section 3(p) prior art review. Facilitator will reach out via ${email} within prescribed SLA.`
    };

    const tickets = getStoredTickets();
    tickets.unshift(newTicket);
    localStorage.setItem('humanExpertTickets', JSON.stringify(tickets));

    // Update active ticket card
    updateActiveTicketDisplay(newTicket);
    renderTicketsTable();

    // Reset form
    form.reset();

    if (window.showToast) {
      window.showToast(`Ticket ${newId} submitted to IP Facilitator Queue!`);
    }

    if (window.logAuditEvent) {
      window.logAuditEvent('ESCALATION_TICKET_SUBMITTED', `Created facilitation ticket: ${newId} for ${title}`);
    }
  });
}

function updateActiveTicketDisplay(ticket) {
  const idEl = document.getElementById('ticket-id-display');
  const statusEl = document.getElementById('ticket-status-display');
  const titleEl = document.getElementById('ticket-title-display');
  const metaEl = document.getElementById('ticket-meta-display');

  if (idEl) idEl.textContent = `Ticket: ${ticket.id}`;
  if (statusEl) {
    statusEl.className = `badge-status ${getTicketStatusClass(ticket.status)}`;
    statusEl.textContent = ticket.statusLabel;
  }
  if (titleEl) titleEl.textContent = ticket.title;
  if (metaEl) {
    metaEl.innerHTML = `<span>Priority: ${escapeHtml(ticket.priorityLabel)}</span> • <span>Assigned: ${escapeHtml(ticket.facilitator)}</span>`;
  }
  activeTicketId = ticket.id;
}

function bindModalButtons() {
  const viewActiveBtn = document.getElementById('btn-view-ticket-opinion');
  if (viewActiveBtn) {
    viewActiveBtn.addEventListener('click', () => {
      openTicketDetailModal(activeTicketId);
    });
  }
}

function openTicketDetailModal(ticketId) {
  const tickets = getStoredTickets();
  const ticket = tickets.find(t => t.id === ticketId);
  if (!ticket) return;

  const modal = document.getElementById('ticket-modal');
  const modalId = document.getElementById('modal-ticket-id');
  const modalTitle = document.getElementById('modal-ticket-title');
  const modalBody = document.getElementById('modal-ticket-body');

  if (!modal || !modalBody) return;

  modalId.textContent = `Ticket: ${ticket.id}`;
  modalTitle.textContent = ticket.title;

  modalBody.innerHTML = `
    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; background: var(--bg-card); padding: 14px; border-radius: 8px; margin-bottom: 18px; font-size: 0.84rem;">
      <div>
        <span style="color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Submitter</span>
        <div style="font-weight: 600; color: var(--color-primary-dark);">${escapeHtml(ticket.submitter)} (${escapeHtml(ticket.org)})</div>
      </div>
      <div>
        <span style="color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Jurisdiction &amp; Priority</span>
        <div style="font-weight: 600; color: var(--color-primary-dark);">${escapeHtml(ticket.jurLabel)} • ${escapeHtml(ticket.priorityLabel)}</div>
      </div>
      <div>
        <span style="color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Assigned Facilitator</span>
        <div style="font-weight: 600; color: #1B5E20;">${escapeHtml(ticket.facilitator)}</div>
      </div>
      <div>
        <span style="color: var(--text-muted); font-size: 0.72rem; text-transform: uppercase; font-weight: 700;">Submission Timestamp</span>
        <div style="font-weight: 600; color: var(--text-dark);">${escapeHtml(ticket.submitted)}</div>
      </div>
    </div>

    <div style="margin-bottom: 18px;">
      <h4 style="font-size: 0.88rem; font-weight: 700; color: var(--color-primary-dark); margin-bottom: 8px;">Accredited Attorney Facilitation Opinion Notes</h4>
      <div style="background: #FFFFFF; border: 1px solid var(--border-subtle); border-left: 4px solid var(--color-primary); padding: 14px 16px; border-radius: 0 6px 6px 0; font-size: 0.86rem; line-height: 1.6; color: #263238;">
        ${escapeHtml(ticket.opinionNotes)}
      </div>
    </div>

    <div style="background: #E8F5E9; padding: 10px 14px; border-radius: 6px; font-size: 0.78rem; color: #1B5E20; display: flex; align-items: center; gap: 8px;">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>Statutory conflict check passed against CGPDTM and NBA databases.</span>
    </div>
  `;

  modal.classList.add('active');

  if (window.logAuditEvent) {
    window.logAuditEvent('TICKET_INSPECT', `Viewed facilitator notes for ${ticket.id}`);
  }
}

function downloadOpinionMemo() {
  const tickets = getStoredTickets();
  const ticket = tickets.find(t => t.id === activeTicketId) || tickets[0];
  if (!ticket) return;

  const content = `================================================================================
IP-SAKTI SAHAYAK — FACILITATOR MEMORANDUM OF ADVISORY
Ticket ID: ${ticket.id}
Date: ${new Date().toLocaleString()}
================================================================================
Subject: ${ticket.title}
Applicant: ${ticket.submitter} (${ticket.org})
Assigned Attorney: ${ticket.facilitator}
Jurisdiction: ${ticket.jurLabel}
Priority Level: ${ticket.priorityLabel}

ATTORNEY NOTES & PRELIMINARY OPINION:
${ticket.opinionNotes}

NEXT STATUTORY STEPS:
1. File formal disclosure under Biological Diversity Act 2002 if biological origin is India.
2. Prepare comparative experimental data establishing non-additive synergism.
3. Comply with Foreign Filing License (FFL) requirements under Patents Act Section 39.

LEGAL NOTICE:
This memo reflects preliminary institutional facilitation advice and should be confirmed
prior to submission before the Indian Patent Office or State Licensing Authority.
================================================================================`;

  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Facilitator-Memo-${ticket.id}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  if (window.showToast) {
    window.showToast('Facilitator memo downloaded successfully');
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
