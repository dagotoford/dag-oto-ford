const WHATSAPP_NUMBER = "905343999110";

function whatsappUrl(message = "") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  const waLink = document.getElementById("waLink");
  const floatingWa = document.getElementById("floatingWa");
  const form = document.getElementById("appointmentForm");
  const menu = document.querySelector(".menu");
  const nav = document.getElementById("nav");

  if (waLink) {
    waLink.href = whatsappUrl("Merhaba Dağ Oto, servis hakkında bilgi almak istiyorum.");
    waLink.target = "_blank";
    waLink.rel = "noopener";
  }

  if (floatingWa) {
    floatingWa.href = whatsappUrl("Merhaba Dağ Oto, servis hakkında bilgi almak istiyorum.");
    floatingWa.target = "_blank";
    floatingWa.rel = "noopener";
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const message = [
        "Merhaba Dağ Oto, online servis randevusu talep ediyorum.",
        "",
        `Ad Soyad: ${data.get("name") || "-"}`,
        `Telefon: ${data.get("phone") || "-"}`,
        `Araç Modeli: ${data.get("vehicle") || "-"}`,
        `Plaka: ${data.get("plate") || "-"}`,
        `Hizmet Türü: ${data.get("service") || "-"}`,
        `Tercih Edilen Tarih: ${data.get("date") || "-"}`,
        `Açıklama: ${data.get("note") || "-"}`
      ].join("\n");
      window.open(whatsappUrl(message), "_blank", "noopener");
    });
  }

  if (menu && nav) {
    menu.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => nav.classList.remove("open"));
    });
  }
});
