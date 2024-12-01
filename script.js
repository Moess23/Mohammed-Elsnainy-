
document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".container");
        const button = document.getElementById("toggleAnimation");

            // تأخير ظهور الصفحة عند التحميل
                setTimeout(() => {
                        container.classList.add("visible");
                            }, 500);

                                // تشغيل أو إيقاف الأنميشن عند الضغط على الزر
                                    button.addEventListener("click", () => {
                                            if (container.classList.contains("visible")) {
                                                        container.classList.remove("visible");
                                                                } else {
                                                                            container.classList.add("visible");
                                                                                    }
                                                                                        });
                                                                                        });


                                                                                        