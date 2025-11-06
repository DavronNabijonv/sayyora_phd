// import { galleryResources } from '@/widgets/galery-table/lib/data';
// import GalleryTable from '@/widgets/galery-table/ui';

// const Page = () => {
//   return (
//     <div className="p-4">
//       <h1 className="text-lg font-normal mb-4">
//         Fotogalereya va Animatsiyalar
//       </h1>
//       <GalleryTable data={galleryResources} />
//     </div>
//   );
// };

// export default Page;

// pages/zamonaviy-ota-ona.tsx

//import Image from "next/image";

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800 px-5 sm:px-10 lg:px-20 py-10">
        {/* Title */}
        <section className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 text-blue-800">
            Zamonaviy Ota-Ona
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Zamon bilan hamnafas, hissiy jihatdan yetuk va texnologiyani
            tushunadigan ota-onalar — farzand tarbiyasining yangi bosqichi.
          </p>
        </section>

        {/* Image */}
        {/* <div className="flex justify-center mb-12">
          <Image
            src="/modern-family.jpg"
            alt="Zamonaviy ota-ona oilasi"
            width={900}
            height={500}
            className="rounded-2xl shadow-lg object-cover"
          />
        </div> */}

        {/* Sections */}
        <section className="space-y-10">
          {/* Oddiy ta’rif */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Oddiy ta’rif
            </h2>
            <p className="leading-relaxed">
              Zamonaviy ota-ona — bu farzandining tarbiyasiga texnologik,
              psixologik va ijtimoiy o‘zgarishlar nuqtayi nazaridan
              yondashadigan shaxsdir. U faqat nazorat qiluvchi emas, balki yo‘l
              ko‘rsatuvchi, tinglovchi va ilhomlantiruvchi.
            </p>
          </div>

          {/* Asosiy fazilatlar */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Zamonaviy ota-onaning asosiy fazilatlari
            </h2>
            <ul className="space-y-3 list-disc list-inside">
              <li>
                <b>Hissiy intellekt:</b> Bolaning hislarini tushunish va ularni
                e’tiborga olish.
              </li>
              <li>
                <b>Texnologiyadan foydalanish:</b> Internetni taqiqlamay, uni
                birgalikda o‘rganish.
              </li>
              <li>
                <b>O‘zgarishga ochiqlik:</b> “Bizning davrimizda...” o‘rniga
                “Bugun qanday yaxshiroq yo‘l bor?” degan savol.
              </li>
              <li>
                <b>Hamkorlikda tarbiya:</b> Ota, ona va bola bir jamoa sifatida
                harakat qiladi.
              </li>
              <li>
                <b>Ishonch:</b> Nazorat emas, ishonch orqali yo‘l ko‘rsatish.
              </li>
            </ul>
          </div>

          {/* Yondashuvlar jadvali */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Eskicha va Zamonaviy yondashuvlar
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left">
                <thead>
                  <tr className="bg-blue-100 text-blue-800">
                    <th className="p-3">Eskicha model</th>
                    <th className="p-3">Zamonaviy model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-3">“Men aytdim — bo‘ldi”</td>
                    <td className="p-3">“Birgalikda qaror qilaylik”</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">“Telefondan uzoqlashtir”</td>
                    <td className="p-3">
                      “Telefondan foydali foydalanishni o‘rganaylik”
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">“Bu yoshda bunday bo‘lmaydi”</td>
                    <td className="p-3">
                      “Har yoshning o‘z o‘rganish usuli bor”
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-3">“Xato qilding, jazolan”</td>
                    <td className="p-3">
                      “Xato qilding — endi tahlil qilaylik”
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Raqamli tarbiya */}
          <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Raqamli tarbiya
            </h2>
            <p>
              Raqamli asrda bola internet orqali o‘rganadi, ijod qiladi, do‘st
              topadi. Shuning uchun ota-ona bu jarayonni taqiqlamay, uni
              tushunib, yo‘l-yo‘riq ko‘rsatishi zarur. Texnologiya — dushman
              emas, vosita.
            </p>
          </div>

          {/* Foydalari */}
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Zamonaviy ota-onalikning foydalari
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                Bola o‘zini tushunadigan va tinglanadigan muhitda ulg‘ayadi.
              </li>
              <li>Ota-onalar o‘rtasida uyg‘unlik kuchayadi.</li>
              <li>Bola mustaqil va ijodkor shaxs bo‘lib shakllanadi.</li>
              <li>Oila ichida ochiq muloqot madaniyati paydo bo‘ladi.</li>
              <li>Psixologik barqarorlik va zamon bilan moslashuv ortadi.</li>
            </ul>
          </div>

          {/* Video */}
          <div className="flex justify-center">
            <div className="w-full max-w-3xl aspect-video">
              <iframe
                className="w-full h-full rounded-xl shadow-lg"
                src="https://www.youtube.com/embed/8SOQduoLgRw"
                title="Zamonaviy ota-ona videosi"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Yakun */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-center">
            <h2 className="text-2xl font-semibold text-blue-700 mb-4">
              Ideal zamonaviy oila modeli
            </h2>
            <p className="italic text-gray-700">
              “Zamonaviy oila — bu mehr, muloqot va o‘zaro o‘rganish makoni.”
            </p>
            <p className="mt-4 text-gray-600">
              Ota — yo‘l ko‘rsatuvchi, Ona — hissiy muvozanat markazi, Bola esa
              — o‘suvchi va o‘rganuvchi shaxs sifatida qadrlanadi.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
