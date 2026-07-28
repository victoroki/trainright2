import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Icon from '../components/Icon.jsx'
import { PageHero } from '../components/ui.jsx'
import { BOOK_CATEGORIES, PRODUCTS } from '../data/site.js'

const kes = (n) => `KES ${n.toLocaleString('en-KE')}`

function ProductTile({ product, onAdd, inCart }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest transition-shadow hover:shadow-[0_4px_12px_rgba(15,23,42,0.08)]">
      <div className="relative flex h-36 items-center justify-center bg-primary-fixed">
        <Icon name="menu_book" className="text-6xl text-on-primary-fixed-variant" fill />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-on-surface">
                  {product.category}
                </span>
              </div>
              
      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-[15px] font-bold leading-snug text-on-surface">{product.name}</h3>
        <p className="mt-1.5 text-label-md text-on-surface-variant">Seller: {product.seller}</p>
        <div className="mt-4 flex items-center justify-between gap-3">
          <p className="font-display text-lg font-bold text-primary">{kes(product.price)}</p>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className={`inline-flex items-center gap-1.5 rounded px-3.5 py-2 text-label-lg transition-colors ${
              inCart
                ? 'bg-secondary-fixed text-on-secondary-fixed-variant'
                : 'bg-primary text-on-primary hover:bg-on-primary-fixed-variant'
            }`}
          >
            <Icon name={inCart ? 'check' : 'add_shopping_cart'} className="text-base" />
            {inCart ? 'Added' : 'Add'}
          </button>
        </div>
      </div>
    </article>
  )
}

export default function BuyABook() {
  const [category, setCategory] = useState('All')
  const [cart, setCart] = useState([])

  const filtered = useMemo(
    () => (category === 'All' ? PRODUCTS : PRODUCTS.filter((p) => p.category === category)),
    [category],
  )
  const subtotal = cart.reduce((sum, p) => sum + p.price, 0)

  const add = (p) => setCart((c) => (c.some((x) => x.name === p.name) ? c : [...c, p]))
  const remove = (name) => setCart((c) => c.filter((x) => x.name !== name))

  return (
    <>
      <PageHero
        title="Books and stationery, delivered to you"
        lead="Verified sellers list their items here. Pay directly via MPESA pay bill or bank card, plus delivery."
        icon="menu_book"
      />

      <section className="bg-surface py-16 md:py-20">
        <div className="shell">
          {/* Category filter */}
          <div className="mb-10 flex flex-wrap gap-2.5" role="tablist" aria-label="Categories">
            {BOOK_CATEGORIES.map((c) => (
              <button
                key={c}
                type="button"
                role="tab"
                aria-selected={category === c}
                onClick={() => setCategory(c)}
                className={`rounded-full px-4 py-2 text-label-lg transition-colors ${
                  category === c
                    ? 'bg-primary text-on-primary'
                    : 'border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-primary hover:text-primary'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Products */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 xl:grid-cols-3">
              {filtered.map((p) => (
                <ProductTile key={p.name} product={p} onAdd={add} inCart={cart.some((x) => x.name === p.name)} />
              ))}
              {filtered.length === 0 && (
                <p className="col-span-full rounded-xl border border-dashed border-outline-variant p-10 text-center text-body-md text-on-surface-variant">
                  No items in this category yet. Sellers add new stock every week.
                </p>
              )}
            </div>

            {/* Sidebar: how buying works + cart */}
            <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
                <h2 className="flex items-center gap-2.5 font-display text-headline-sm text-on-surface">
                  <Icon name="payments" className="text-primary" />
                  How buying works
                </h2>
                <ol className="mt-5 space-y-4">
                  {[
                    'Add items to your basket and proceed to checkout.',
                    'Pay via MPESA pay bill or bank card. You will get a prompt to enter your PIN.',
                    'Add delivery: the buyer pays the delivery charge at checkout.',
                    'The seller dispatches and you receive an SMS confirmation from TRAINRIGHT.',
                  ].map((step, i) => (
                    <li key={step} className="flex gap-3 text-body-sm text-on-surface">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-fixed font-display text-[11px] font-bold text-on-primary-fixed-variant">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-6">
                <h2 className="flex items-center justify-between font-display text-headline-sm text-on-surface">
                  <span className="flex items-center gap-2.5">
                    <Icon name="shopping_cart" className="text-primary" />
                    Your basket
                  </span>
                  <span className="rounded-full bg-surface-container px-2.5 py-0.5 text-label-md font-semibold text-on-surface">
                    {cart.length}
                  </span>
                </h2>
                {cart.length === 0 ? (
                  <p className="mt-4 text-body-sm text-on-surface-variant">Your basket is empty.</p>
                ) : (
                  <>
                    <ul className="mt-4 space-y-3">
                      {cart.map((p) => (
                        <li key={p.name} className="flex items-start justify-between gap-3 text-body-sm">
                          <span className="text-on-surface">{p.name}</span>
                          <span className="flex shrink-0 items-center gap-2">
                            <span className="font-semibold text-on-surface">{kes(p.price)}</span>
                            <button
                              type="button"
                              onClick={() => remove(p.name)}
                              aria-label={`Remove ${p.name}`}
                              className="text-outline transition-colors hover:text-primary"
                            >
                              <Icon name="delete" className="text-lg" />
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 border-t border-outline-variant pt-4">
                      <p className="flex justify-between text-body-sm text-on-surface-variant">
                        <span>Delivery</span>
                        <span>Calculated at checkout</span>
                      </p>
                      <p className="mt-2 flex justify-between font-display text-lg font-bold text-on-surface">
                        <span>Subtotal</span>
                        <span className="text-primary">{kes(subtotal)}</span>
                      </p>
                      <button type="button" className="btn-primary mt-5 w-full">
                        <Icon name="lock" className="text-base" />
                        Checkout with MPESA or card
                      </button>
                    </div>
                  </>
                )}
              </div>

              <div className="rounded-xl bg-secondary p-6 text-on-secondary">
                <h2 className="flex items-center gap-2.5 font-display text-headline-sm text-white">
                  <Icon name="storefront" />
                  Sell on TrainRight
                </h2>
                <p className="mt-3 text-body-sm text-white/85">
                  Book sellers can list items, receive direct payment and reach thousands of learners.
                </p>
                <Link
                  to="/contact-us"
                  className="mt-5 inline-flex items-center gap-2 rounded bg-white px-4 py-2.5 text-label-lg text-secondary transition-colors hover:bg-secondary-fixed"
                >
                  Become a seller
                  <Icon name="arrow_forward" className="text-base" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
