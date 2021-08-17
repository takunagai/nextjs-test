import Image from 'next/image'

function HomePage() {
  return (
    <>
      <header className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">DaisyUI</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            <a className="btn btn-ghost btn-sm rounded-btn">Home</a>
            <a className="btn btn-ghost btn-sm rounded-btn">Portfolio</a>
            <a className="btn btn-ghost btn-sm rounded-btn">About</a>
            <a className="btn btn-ghost btn-sm rounded-btn">Contact</a>
          </div>
        </div>
        <div className="navbar-end">
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </header>

      <main>
        <div className="mt-8 md:container md:mx-auto">
          <h1>タイトルです</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div>
              <div className="shadow card">
                <div className="card-body">
                  <h2 className="card-title">keyboard</h2>
                  <p>
                    <kbd className="kbd">⌘</kbd> + <kbd className="kbd">⌥</kbd> + <kbd className="kbd">t</kbd>
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow card">
                <div className="card-body">
                  <h2 className="card-title">Indicator</h2>
                  <div className="m-6 indicator">
                    <div className="indicator-item indicator-top indicator-start badge badge-secondary">1</div>
                    <div className="indicator-item indicator-top indicator-center badge badge-secondary">2</div>
                    <div className="indicator-item indicator-top indicator-end badge badge-secondary">3</div>
                    <div className="indicator-item indicator-middle indicator-start badge badge-secondary">4</div>
                    <div className="indicator-item indicator-middle indicator-center badge badge-secondary">5</div>
                    <div className="indicator-item indicator-middle indicator-end badge badge-secondary">6</div>
                    <div className="indicator-item indicator-bottom indicator-start badge badge-secondary">7</div>
                    <div className="indicator-item indicator-bottom indicator-center badge badge-secondary">8</div>
                    <div className="indicator-item indicator-bottom indicator-end badge badge-secondary">9</div>
                    <div className="grid w-32 h-32 bg-base-300 place-items-center">content</div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="shadow card">
                <div className="card-body">
                  <h2 className="card-title">Masked Image</h2>
                  <p>
                    <Image src="https://picsum.photos/id/1005/100/100.webp?random=1" alt="Picture One" className="mask mask-squircle" width={100} height={100} />
                    <Image src="https://picsum.photos/id/1005/100/100.webp?random=2" alt="Picture Two" className="mask mask-hexagon" width={100} height={100} />
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="mockup-window bg-base-300">
                <div className="flex justify-center px-4 py-16 bg-base-200">
                  Hello!
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4"><a href="#my-modal" className="btn btn-primary">open modal</a></p>
          <div id="my-modal" className="modal">
            <div className="modal-box">
              <p>Enim dolorem dolorum omnis atque necessitatibus. Consequatur aut adipisci qui iusto illo eaque. Consequatur repudiandae et. Nulla ea quasi eligendi. Saepe velit autem minima.</p>
              <div className="modal-action">
                <a href="#" className="btn btn-primary">Accept</a>
                <a href="#" className="btn">Close</a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default HomePage
