// สร้างส่วนหัวของหน้าเว็บ
const createHeader = () => {
  const header = document.createElement('header');
  header.className = 'navbar';

  const title = document.createElement('h1');
  title.textContent = 'ยินดีต้อนรับ';
  header.appendChild(title);

  const nav = document.createElement('nav');
  const navList = document.createElement('ul');

  const sections = ['สาขาเทคโนโลยีสารสนเทศ'];
  sections.forEach(section => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = `#${section}`;
      a.textContent = section;
      li.appendChild(a);
      navList.appendChild(li);
  });

  nav.appendChild(navList);
  header.appendChild(nav);

  document.body.appendChild(header);
};

// สร้างส่วนเนื้อหาหลัก
const createMainContent = () => {
  const main = document.createElement('main');

  const section = document.createElement('section');
  section.id = 'general';
  section.className = 'container';

  const sectionTitle = document.createElement('h2');
  sectionTitle.textContent = 'ข้อมูลทั่วไป';
  section.appendChild(sectionTitle);

  const printButton = document.createElement('button');
  printButton.className = 'btn-print';
  printButton.textContent = 'พิมพ์ข้อมูลนี้';
  printButton.addEventListener('click', () => window.print());
  section.appendChild(printButton);

  const cardContainer = document.createElement('div');
  cardContainer.className = 'card-container';

  const people = [
      {
          img: '-',
          title: '-า',
          name: '-',
          phone: '-',
          email: '-',
      },
      {
          img: 'advisor.jpg',
          title: '-',
          name: '-',
          phone: '-',
          email: '-',
      },
      {
          img: 'head.jpg',
          title: '-',
          name: '-',
          phone: '-',
          email: '-',
      },
  ];

  people.forEach(person => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = person.img;
      img.alt = `${person.title} Photo`;
      card.appendChild(img);

      const title = document.createElement('h3');
      title.textContent = person.title;
      card.appendChild(title);

      const name = document.createElement('p');
      name.textContent = person.name;
      card.appendChild(name);

      const phone = document.createElement('p');
      phone.textContent = `โทร: ${person.phone}`;
      card.appendChild(phone);

      const email = document.createElement('p');
      email.textContent = `Email: ${person.email}`;
      card.appendChild(email);

      const uploadButton = document.createElement('button');
      uploadButton.className = 'btn-upload';
      uploadButton.textContent = 'อัปโหลดรูปภาพ';
      uploadButton.addEventListener('click', () => alert('ฟีเจอร์อัปโหลดอยู่ในระหว่างการพัฒนา'));
      card.appendChild(uploadButton);

      cardContainer.appendChild(card);
  });

  section.appendChild(cardContainer);

  const studentInfo = document.createElement('div');
  studentInfo.className = 'student-info';

  studentInfo.innerHTML = `
      <h3>ข้อมูลนักศึกษา</h3>
      <p><strong>รหัสนักศึกษา:</strong> 67391001002</p>
      <p><strong>ชื่อ-นามสกุล:</strong> นายธนกร กุลจิตรพันธ์</p>
      <p><strong>ห้องเรียน:</strong> IT.4102</p>
      <p><strong>สาขาวิชา:</strong> เทคโนโลยีสารสนเทศ</p>
      <p><strong>เลขบัตรประชาชน:</strong> 1509966439211</p>
      <p><strong>วันเกิด:</strong> 18 กรกฎาคม 2548</p>
  `;
  section.appendChild(studentInfo);

  main.appendChild(section);
  document.body.appendChild(main);
};

// สร้างส่วนท้ายของหน้าเว็บ
const createFooter = () => {
  const footer = document.createElement('footer');
  footer.innerHTML = '<p>© 2024 ข้อมูลระบบ</p>';
  document.body.appendChild(footer);
};

// สร้าง CSS ด้วย JavaScript
const createStyles = () => {
  const style = document.createElement('style');
  style.textContent = `
      * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }

      body {
          font-family: Arial, sans-serif;
          background-color: #f9f9f9;
          color: #333;
          line-height: 1.6;
      }

      .navbar {
          background-color: #333;
          color: #fff;
          padding: 10px;
          text-align: center;
      }

      .navbar ul {
          list-style: none;
          display: flex;
          justify-content: center;
          margin-top: 10px;
      }

      .navbar ul li {
          margin: 0 15px;
      }

      .navbar ul li a {
          color: #fff;
          text-decoration: none;
      }

      .container {
          margin: 20px;
          padding: 20px;
          background: #fff;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
      }

      .card-container {
          display: flex;
          justify-content: space-around;
          margin-top: 20px;
      }

      .card {
          background: #e3f2fd;
          border-radius: 5px;
          padding: 15px;
          text-align: center;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          width: 30%;
      }

      .card img {
          width: 100%;
          border-radius: 50%;
      }

      .btn-print, .btn-upload {
          background-color: #4CAF50;
          color: white;
          padding: 10px 20px;
          border: none;
          cursor: pointer;
          margin-top: 10px;
          border-radius: 5px;
      }

      footer {
          background: #333;
          color: #fff;
          text-align: center;
          padding: 10px;
      }
  `;
  document.head.appendChild(style);
};

// เรียกใช้ฟังก์ชันทั้งหมด
createStyles();
createHeader();
createMainContent();
createFooter();
