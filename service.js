function initQuoteServices() {
  const form = $('#quoteForm');
  if (!form) return;

  // Show/hide service detail blocks
  form.addEventListener('change', (e) => {
    if (e.target.matches('input[type="checkbox"][data-service-toggle]')) {
      const key = e.target.getAttribute('data-service-toggle');
      const section = form.querySelector(`[data-service-section="${key}"]`);
      if (section) {
        section.hidden = !e.target.checked;
      }
    }
  });

  // Helper to clone row blocks
  function cloneRow(list, itemSelector) {
    const first = list.querySelector(itemSelector);
    if (!first) return;
    const clone = first.cloneNode(true);
    clone.querySelectorAll('input, select').forEach((el) => {
      if (el.tagName === 'SELECT') el.selectedIndex = 0;
      else el.value = '';
    });
    list.appendChild(clone);
  }

  // Sofas
  const sofaList = $('#sofaList', form);
  const addSofaBtn = $('[data-add-sofa]', form);
  if (sofaList && addSofaBtn) {
    addSofaBtn.addEventListener('click', () => {
      cloneRow(sofaList, '[data-sofa-item]');
    });
    sofaList.addEventListener('click', (e) => {
      if (e.target.matches('[data-remove-sofa]')) {
        const item = e.target.closest('[data-sofa-item]');
        if (!item) return;
        if (sofaList.querySelectorAll('[data-sofa-item]').length > 1) {
          item.remove();
        }
      }
    });
  }

  // Mattresses
  const mattressList = $('#mattressList', form);
  const addMattressBtn = $('[data-add-mattress]', form);
  if (mattressList && addMattressBtn) {
    addMattressBtn.addEventListener('click', () => {
      cloneRow(mattressList, '[data-mattress-item]');
    });
    mattressList.addEventListener('click', (e) => {
      if (e.target.matches('[data-remove-mattress]')) {
        const item = e.target.closest('[data-mattress-item]');
        if (!item) return;
        if (mattressList.querySelectorAll('[data-mattress-item]').length > 1) {
          item.remove();
        }
      }
    });
  }

  // Rugs
  const rugList = $('#rugList', form);
  const addRugBtn = $('[data-add-rug]', form);
  if (rugList && addRugBtn) {
    addRugBtn.addEventListener('click', () => {
      cloneRow(rugList, '[data-rug-item]');
    });
    rugList.addEventListener('click', (e) => {
      if (e.target.matches('[data-remove-rug]')) {
        const item = e.target.closest('[data-rug-item]');
        if (!item) return;
        if (rugList.querySelectorAll('[data-rug-item]').length > 1) {
          item.remove();
        }
      }
    });
  }
}

function prepareServiceSummaries(form) {
  if (!form || form.id !== 'quoteForm') return;

  const servicesSummaryInput = $('#servicesSummary', form);
  const upholsterySummaryInput = $('#upholsterySummary', form);
  const mattressSummaryInput = $('#mattressSummary', form);
  const rugsSummaryInput = $('#rugsSummary', form);

  const servicesChecked = Array.from(
    form.querySelectorAll('input[name="services[]"]:checked')
  ).map((el) => el.value);

  const parts = [];

  // Carpet
  if (servicesChecked.includes('carpet')) {
    const rooms = parseInt(form.carpet_rooms?.value || '0', 10) || 0;
    parts.push(
      rooms > 0 ? `Carpet: ${rooms} rooms` : 'Carpet steam cleaning'
    );
  }

  // Tiles
  if (servicesChecked.includes('tiles')) {
    const areas = parseInt(form.tile_areas?.value || '0', 10) || 0;
    parts.push(
      areas > 0 ? `Tiles: ${areas} areas` : 'Tile & grout cleaning'
    );
  }

  // Upholstery detail
  const sofaItems = form.querySelectorAll('[data-sofa-item]');
  const sofaBits = [];
  sofaItems.forEach((row, i) => {
    const seats = row.querySelector('select[name="sofa_seats[]"]')?.value;
    const material = row.querySelector('select[name="sofa_material[]"]')?.value;
    if (seats || material) {
      sofaBits.push(
        `Couch ${i + 1}: ${seats || ''}${material ? `, ${material}` : ''}`
      );
    }
  });
  if (servicesChecked.includes('upholstery')) {
    parts.push(
      sofaBits.length ? `Upholstery: ${sofaBits.join(' | ')}` : 'Upholstery / couches'
    );
  }
  if (upholsterySummaryInput) {
    upholsterySummaryInput.value = sofaBits.join(' | ');
  }

  // Mattress detail
  const mattItems = form.querySelectorAll('[data-mattress-item]');
  const mattBits = [];
  mattItems.forEach((row) => {
    const size = row.querySelector('select[name="mattress_size[]"]')?.value;
    const qty =
      parseInt(row.querySelector('input[name="mattress_qty[]"]')?.value || '0', 10) || 0;
    if (size && qty > 0) {
      mattBits.push(`${qty} × ${size}`);
    }
  });
  if (servicesChecked.includes('mattress')) {
    parts.push(
      mattBits.length ? `Mattresses: ${mattBits.join(', ')}` : 'Mattress cleaning'
    );
  }
  if (mattressSummaryInput) {
    mattressSummaryInput.value = mattBits.join(', ');
  }

  // Rugs detail
  const rugItems = form.querySelectorAll('[data-rug-item]');
  const rugBits = [];
  rugItems.forEach((row, i) => {
    const w =
      parseFloat(row.querySelector('input[name="rug_width[]"]')?.value || '0') || 0;
    const h =
      parseFloat(row.querySelector('input[name="rug_length[]"]')?.value || '0') || 0;
    if (w > 0 && h > 0) {
      rugBits.push(`Rug ${i + 1}: ${w}m × ${h}m`);
    }
  });
  if (servicesChecked.includes('rugs')) {
    parts.push(
      rugBits.length ? `Rugs: ${rugBits.join(' | ')}` : 'Rug cleaning'
    );
  }
  if (rugsSummaryInput) {
    rugsSummaryInput.value = rugBits.join(' | ');
  }

  if (servicesSummaryInput) {
    servicesSummaryInput.value = parts.join(' • ');
  }
}
