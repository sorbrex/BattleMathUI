import { redirect } from '@sveltejs/kit';
import { initializeClient } from '$lib/ClientIO';

/** @type {import('./$types').PageLoad} */

// @ts-ignore
export function load({ url }) {
  const u = url.searchParams.get('username');
  if (!u) throw redirect(302, '/');

  initializeClient();

  console.log('load', u);

  return {
    username: url.searchParams.get('username')
  };
}
