export const GET = () => {
  // Redirect requests for /favicon.ico to the existing svg under /assets
  return new Response(null, {
    status: 302,
    headers: {
      Location: '/assets/favicon.svg'
    }
  });
}
