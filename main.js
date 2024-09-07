


// ฟังก์ชันสร้างกล่องเมนู
function createMenuCard(menu, containerId) {
    const container = document.getElementById(containerId);
    const card = document.createElement('div');
    card.classList.add('menu-card');

    // รูปภาพอาหาร
    const img = document.createElement('img');
    img.src = menu.image;
    card.appendChild(img);

    // ชื่อเมนู
    const p = document.createElement('p');
    p.textContent = menu.name;
    card.appendChild(p);

    // ปุ่ม
    const button = document.createElement('button');
    button.textContent = 'ส่วนผสม';
    button.onclick = function() {
        Swal.fire((menu.details));
    };
    card.appendChild(button);

    container.appendChild(card);

    setTimeout(() => {
        card.classList.add('show');
    }, 3000);
}

// ดึงข้อมูลจากไฟล์ datafood.json
fetch('datafood.json')
    .then(response => response.json())
    .then(data => {
        // แสดงเมนูอาหารเช้า
        data.breakfast.forEach(menu => createMenuCard(menu, 'breakfast-container'));

        // แสดงเมนูอาหารกลางวัน
        data.lunch.forEach(menu => createMenuCard(menu, 'lunch-container'));

        // แสดงเมนูอาหารเย็น
        data.dinner.forEach(menu => createMenuCard(menu, 'dinner-container'));
    })
    .catch(error => console.error('เกิดข้อผิดพลาด:', error));





    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function showMenuOnScroll() {
        const menuCards = document.querySelectorAll('.menu-card');
        menuCards.forEach((card) => {
            if (isInViewport(card)) {
                card.classList.add('show'); // เพิ่มคลาส show เมื่ออยู่ใน viewport
            }
        });
    }

    window.addEventListener('scroll', showMenuOnScroll);

// ตรวจสอบเมื่อโหลดหน้าเว็บเสร็จ
window.addEventListener('load', showMenuOnScroll);