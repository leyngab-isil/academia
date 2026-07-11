document.addEventListener("DOMContentLoaded", async () => {
    const isInPages = location.pathname.includes("/pages/");

    const base = isInPages
        ? "../"
        : "";

    const head = `  
        <meta charset="UTF-8">
        <title>Academia Ficticia - Inicio</title>
        <link rel="stylesheet" href="${base}assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="${base}assets/bootstrap/css/bootstrap.rtl.min.css">
        <link rel="stylesheet" href="${base}assets/bootstrap/css/bootstrap.min.css.map">
        <link rel="stylesheet" href="${base}assets/bootstrap/css/bootstrap.rtl.min.css.map">
        <link rel="stylesheet" href="${base}assets/css/menu.css">
        <link rel="stylesheet" href="${base}assets/css/style.css">
        <link rel="stylesheet" href="${base}assets/css/swiper.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
            integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
            crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.css"
            />
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    `

    document.getElementById("head").innerHTML = head
  
});