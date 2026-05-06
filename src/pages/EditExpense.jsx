import { Link } from "react-router-dom";

const EditExpense = () => {
  return (
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 dark:bg-slate-950">
      <header class="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 backdrop-blur">
        <div class="mx-auto w-full max-w-3xl px-4 py-4 flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <div class="size-10 flex items-center justify-center rounded-xl bg-[#006600]/10">
              <svg
                class="text-[#006600] size-6"
                fill="none"
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 45.8096C19.6865 45.8096 15.4698 44.5305 11.8832 42.134C8.29667 39.7376 5.50128 36.3314 3.85056 32.3462C2.19985 28.361 1.76794 23.9758 2.60947 19.7452C3.451 15.5145 5.52816 11.6284 8.57829 8.5783C11.6284 5.52817 15.5145 3.45101 19.7452 2.60948C23.9758 1.76795 28.361 2.19986 32.3462 3.85057C36.3314 5.50129 39.7376 8.29668 42.134 11.8833C44.5305 15.4698 45.8096 19.6865 45.8096 24L24 24L24 45.8096Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <div class="flex flex-col leading-tight">
              <span class="text-slate-900 dark:text-slate-100 text-sm font-semibold">Editar gasto</span>
              <span class="text-slate-600 dark:text-slate-400 text-xs">Mismo formulario con valores de ejemplo</span>
            </div>
          </div>

          <Link
            to="/expenses"
            class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
          >
            Volver
          </Link>
        </div>
      </header>

      <main class="mx-auto w-full max-w-3xl px-4 py-8 flex flex-col gap-6">
        <section class="flex flex-col gap-2">
          <h1 class="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">Editar Expense</h1>
          <p class="text-slate-600 dark:text-slate-400 text-sm">
            Campos según el modelo (sin el id). Valores precargados como referencia visual.
          </p>
        </section>

        <section class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <div class="flex flex-col">
              <h2 class="text-slate-900 dark:text-slate-100 text-base font-bold">Formulario</h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm">ID ejemplo: 5002</p>
            </div>
            <span class="text-xs font-semibold text-slate-600 dark:text-slate-400 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
              Estado: Borrador
            </span>
          </div>

          <div class="p-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="sm:col-span-2 flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Descripción</label>
                <input
                  defaultValue="Reserva AWS EC2 - Proyecto Final"
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  placeholder="Descripción"
                  type="text"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Fecha</label>
                <input
                  defaultValue="2026-03-02"
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  type="date"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Valor</label>
                <input
                  defaultValue={1580000}
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  placeholder="Valor"
                  type="number"
                />
              </div>

              <div class="sm:col-span-2 flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Imagen (texto)</label>
                <input
                  defaultValue="ic-server"
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  placeholder="ic-server"
                  type="text"
                />
                <div class="rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950/40 p-4">
                  <p class="text-slate-900 dark:text-slate-100 text-sm font-semibold">Preview</p>
                  <p class="text-slate-600 dark:text-slate-400 text-sm mt-1">
                    Icono: <span class="font-semibold text-slate-900 dark:text-slate-100">ic-server</span>
                  </p>
                </div>
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Usuario ID</label>
                <input
                  defaultValue={1}
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  placeholder="1"
                  type="number"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Medio de pago ID</label>
                <input
                  defaultValue={104}
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  placeholder="104"
                  type="number"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Comercio ID</label>
                <input
                  defaultValue={201}
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  placeholder="201"
                  type="number"
                />
              </div>

              <div class="flex flex-col gap-2">
                <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">Categoría ID</label>
                <input
                  defaultValue={303}
                  class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
                  placeholder="303"
                  type="number"
                />
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-2">
              <Link
                to="/expenses"
                class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                Cancelar
              </Link>
              <button
                type="button"
                class="inline-flex items-center justify-center rounded-lg bg-[#006600] px-4 py-3 text-sm font-bold text-white transition-colors hover:bg-[#006600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default EditExpense;

