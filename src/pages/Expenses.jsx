import { useState, useEffect } from "react";
import { end_points } from "../services/api";
import { getLocalStorage, removeLocalStorage } from "../helpers/local-storage";
import { Link } from "react-router-dom";
const Expenses = () => {
  const [getEmail, setEmail] = useState("");
  const [getPassword, setPassword] = useState("");
  const [getExpenses, setExpenses] = useState([]);

  function fetchExpenses() {
    fetch(end_points.expenses)
      .then((response) => response.json())
      .then((data) => setExpenses(data));
  }

  useEffect(() => {
    fetchExpenses();
  }, []);

  console.log(getExpenses);

  return (
    <div class="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-slate-50 dark:bg-slate-950">
      <header class="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-950/60 backdrop-blur">
        <div class="mx-auto w-full max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
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
              <span class="text-slate-900 dark:text-slate-100 text-sm font-semibold">
                Gastos
              </span>
              <span class="text-slate-600 dark:text-slate-400 text-xs">
                Listado y control de tus egresos
              </span>
            </div>
          </div>

          <div class="flex items-center gap-2">
            <Link
              to="/dashboard"
              class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              Volver
            </Link>
            <Link
              to="/expenses/create"
              class="inline-flex items-center justify-center rounded-lg bg-[#006600] px-3 py-2 text-sm font-bold text-white transition-colors hover:bg-[#006600]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2"
            >
              Nuevo gasto
            </Link>
          </div>
        </div>
      </header>

      <main class="mx-auto w-full max-w-6xl px-4 py-8 flex flex-col gap-6">
        <section class="flex flex-col gap-2">
          <h1 class="text-slate-900 dark:text-slate-100 text-2xl font-bold tracking-tight">
            Expenses
          </h1>
          <p class="text-slate-600 dark:text-slate-400 text-sm">
            Vista general de gastos registrados.
          </p>
        </section>

        <section class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-5">
          <div class="grid grid-cols-1 md:grid-cols-12 gap-3 items-end">
            <div class="md:col-span-5 flex flex-col gap-2">
              <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                Buscar
              </label>
              <input
                disabled
                onChange={(e) => setEmail(e.target.value)}
                class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Descripción, comercio, categoría..."
                type="text"
              />
            </div>

            <div class="md:col-span-3 flex flex-col gap-2">
              <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                Categoría
              </label>
              <select
                disabled
                onChange={(e) => setPassword(e.target.value)}
                class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <option value="">Todas</option>
                <option value="303">Servicios</option>
                <option value="304">Transporte</option>
                <option value="305">Alimentación</option>
              </select>
            </div>

            <div class="md:col-span-2 flex flex-col gap-2">
              <label class="text-slate-700 dark:text-slate-300 text-sm font-semibold leading-none">
                Mes
              </label>
              <input
                disabled
                class="flex w-full rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 px-4 py-3 text-sm ring-offset-white placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006600] focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                type="month"
              />
            </div>

            <div class="md:col-span-2 flex gap-2">
              <button
                disabled
                type="button"
                class="w-full inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-3 text-sm font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:pointer-events-none disabled:opacity-50"
              >
                Filtrar
              </button>
            </div>
          </div>
        </section>

        <section class="rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden">
          <div class="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <div class="flex flex-col">
              <h2 class="text-slate-900 dark:text-slate-100 text-base font-bold">
                Listado
              </h2>
              <p class="text-slate-600 dark:text-slate-400 text-sm">
                Ejemplo de registros con el modelo de Expense.
              </p>
            </div>
            <div class="flex items-center gap-2">
              <span class="text-xs font-semibold text-slate-600 dark:text-slate-400 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1">
                3 items
              </span>
            </div>
          </div>

          <div class="w-full overflow-x-auto">
            <table class="w-full min-w-[980px] text-sm">
              <thead class="bg-slate-50 dark:bg-slate-950/40">
                <tr class="text-left">
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Descripción
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Fecha
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Valor
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Imagen
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Usuario
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Medio pago
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Comercio
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Categoría
                  </th>
                  <th class="px-5 py-3 text-slate-600 dark:text-slate-400 font-semibold">
                    Acciones
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-slate-200 dark:divide-slate-800">
                {getExpenses.map((item) => (
                  <tr class="hover:bg-slate-50 dark:hover:bg-slate-950/40 transition-colors">
                    <td class="px-5 py-4">
                      <div class="flex items-center gap-3">
                        <div class="size-10 rounded-lg bg-[#006600]/10 flex items-center justify-center">
                          <span class="text-[#006600] text-xs font-bold">
                            {item.id}
                          </span>
                        </div>
                        <div class="flex flex-col">
                          <p class="text-slate-900 dark:text-slate-100 font-semibold">
                            {item.descripcion}
                          </p>
                          <p class="text-slate-600 dark:text-slate-400 text-xs">
                            {item.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="px-5 py-4 text-slate-700 dark:text-slate-200">
                      {item.fecha}
                    </td>
                    <td class="px-5 py-4">
                      <span class="text-red-500 font-bold">$ 1.580.000</span>
                    </td>
                    <td class="px-5 py-4">
                      <span class="inline-flex items-center rounded-full bg-slate-100 dark:bg-slate-800 px-2.5 py-1 text-xs font-semibold text-slate-700 dark:text-slate-200">
                        ic-server
                      </span>
                    </td>
                    <td class="px-5 py-4 text-slate-700 dark:text-slate-200">
                      1
                    </td>
                    <td class="px-5 py-4 text-slate-700 dark:text-slate-200">
                      104
                    </td>
                    <td class="px-5 py-4 text-slate-700 dark:text-slate-200">
                      201
                    </td>
                    <td class="px-5 py-4 text-slate-700 dark:text-slate-200">
                      303
                    </td>
                    <td class="px-5 py-4">
                      <div class="flex items-center gap-2">
                        <Link
                          to="/expenses/edit"
                          class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-slate-100 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                        >
                          Editar
                        </Link>
                        <button
                          type="button"
                          disabled
                          class="inline-flex items-center justify-center rounded-lg bg-red-500 px-3 py-2 text-xs font-bold text-white disabled:pointer-events-none disabled:opacity-50"
                        >
                          Eliminar
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div class="px-5 py-4 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
            <p class="text-xs text-slate-600 dark:text-slate-400">
              Mostrando 1-3 de 3
            </p>
            <div class="flex items-center gap-2">
              <button
                disabled
                type="button"
                class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-slate-100 disabled:pointer-events-none disabled:opacity-50"
              >
                Anterior
              </button>
              <button
                disabled
                type="button"
                class="inline-flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-3 py-2 text-xs font-semibold text-slate-900 dark:text-slate-100 disabled:pointer-events-none disabled:opacity-50"
              >
                Siguiente
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Expenses;
