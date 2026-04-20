class ProductInfoCard extends HTMLElement {
  private static escapeHtml(value: string): string {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  connectedCallback(): void {
    const title = this.getAttribute("title") || "";
    const description = this.getAttribute("description") || "";
    const href = this.getAttribute("href") || "#";
    const actionText = this.getAttribute("action-text") || "ZUM PRODUKT";
    const actionTitle = this.getAttribute("action-title") || "";

    const safeTitle = ProductInfoCard.escapeHtml(title);
    const safeDescription = ProductInfoCard.escapeHtml(description);
    const safeHref = ProductInfoCard.escapeHtml(href);
    const safeActionText = ProductInfoCard.escapeHtml(actionText);
    const safeActionTitle = ProductInfoCard.escapeHtml(actionTitle);

    this.innerHTML =
      '<div class="product-info">' +
      '<h3 class="product-title">' +
      safeTitle +
      "</h3>" +
      "<p>" +
      safeDescription +
      "</p>" +
      "</div>" +
      '<div class="action-button">' +
      '<a href="' +
      safeHref +
      '" title="' +
      safeActionTitle +
      '">' +
      safeActionText +
      "</a>" +
      "</div>";
  }
}

if (!customElements.get("product-info-card")) {
  customElements.define("product-info-card", ProductInfoCard);
}
