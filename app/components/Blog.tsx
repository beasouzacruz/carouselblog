
"use client";

const posts = [
  {
    id: 1,
    category: "Careers",
    title: "How to Dress for Every Type of Job Interview",
    date: "7 Feb 2023",
    views: 55,
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900",
    alt: "Profissionais conversando em uma reunião de trabalho",
  },
  {
    id: 2,
    category: "Education",
    title: "Professional Development in the Childhood Field",
    date: "12 Aug 2023",
    views: 39,
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=900",
    alt: "Criança participando de uma atividade educativa",
  },
  {
    id: 3,
    category: "Psychology",
    title: "Things Telebehavioral Health Care Providers Need to Know",
    date: "21 Dec 2023",
    views: 61,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900",
    alt: "Ambiente profissional moderno",
  },
];

export default function Blog() {
  return (
    <section className="w-full bg-gray-50 px-6 py-10 md:px-10">
      <div className="mx-auto max-w-5xl">
        {/* Título e descrição */}
        <div className="mb-9 text-center">
          <h2 className="text-3xl font-semibold text-gray-900">
            Blog
          </h2>

          <p className="mt-3 text-sm text-gray-500 md:text-base">
            Stay tuned and updated by the latest updates from our blog.
          </p>

          <div className="mx-auto mt-6 h-px w-40 bg-gray-200" />
        </div>

        {/* Cartões */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="min-w-0">
              <img
                src={post.image}
                alt={post.alt}
                width={900}
                height={600}
                className="h-40 w-full rounded-md object-cover"
              />

              <div className="pt-3">
                <p className="mb-1 text-xs font-semibold text-blue-600">
                  {post.category}
                </p>

                <h3 className="text-sm font-semibold leading-snug text-gray-900">
                  {post.title}
                </h3>

                {/* Data e visualizações */}
                <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-gray-500">
                  <span className="inline-flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="16"
                        rx="2"
                      />
                      <path d="M16 3v4M8 3v4M3 11h18" />
                    </svg>

                    {post.date}
                  </span>

                  <span className="inline-flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>

                    {post.views}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Indicadores visuais */}
        <div
          className="mt-9 flex items-center justify-center gap-2"
          aria-label="Indicadores do blog"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-300" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
        </div>
      </div>
    </section>
  );
}
