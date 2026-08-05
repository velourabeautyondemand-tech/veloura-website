import { redirect } from 'next/navigation';

/**
 * VÉLOURA Senior Care has moved into the services directory structure
 * to improve SEO consistency and marketplace integration.
 */
export default function SeniorCareRedirect() {
  redirect('/services/senior-care');
}