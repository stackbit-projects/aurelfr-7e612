---
title: General enquiries
sections:
  - type: form_section
    content: >-
      ### Billing

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.

      ### Privacy

      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nisl
      ligula, cursus id molestie vel, maximus aliquet risus. Vivamus in nibh
      fringilla, fringilla.
    
## Tables

<div class="responsive-table">
  <table>
      <caption>Table with thead, tfoot, and tbody</caption>
    <thead>
      <tr>
        <th>Produit</th>
        <th>Mois</th>
        <th>Dernier</th>
        <th>Change</th>
        <th>Priorité</th>
        <th>Ouverture</th>
        <th>Haux</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Mais</td>
        <td>Avril</td>
        <td>612'5</td>
        <td>-3,6</td>
        <td>594'0</td>
        <td>345'9</td>
        <td>675'5</td>
      </tr>
      <tr>
        <td>Body content</td>
        <td>Body content</td>
        <td>Body content</td>
        <td>Body content</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Footer content</td>
        <td>Footer content</td>
    <td>Footer content</td>
    <td>Footer content</td>
      </tr>
    </tfoot>
  </table>
</div>  
    content_align: left
    form_position: right
    form_width: fifty
    form_layout: inline
    enable_card: true
    form_id: contact-form
    form_action: /thank-you
    form_fields:
      - input_type: text
        name: name
        label: Name
        default_value: Your name
        is_required: true
      - input_type: email
        name: email
        label: Email
        default_value: Your email address
        is_required: true
      - input_type: select
        name: subject
        label: Subject
        default_value: Please select
        options:
          - Error on the site
          - Sponsorship
          - Other
      - input_type: textarea
        name: message
        label: Message
        default_value: Your message
      - input_type: checkbox
        name: consent
        label: >-
          I understand that this form is storing my submitted information so I
          can be contacted.
        is_required: true
    submit_label: Send Message
    align_vert: top
    padding_top: medium
    padding_bottom: medium
    background_color: primary
seo:
  title: General Enquiries
  description: This is the general enquiries page
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: General Enquiries
      keyName: property
    - name: 'og:description'
      value: This is the general enquiries page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: General Enquiries
    - name: 'twitter:description'
      value: This is the general enquiries page
layout: advanced
---
