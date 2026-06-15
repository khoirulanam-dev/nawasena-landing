import OriginDetailPage, { buildOriginMetadata } from "../OriginDetail";

export const metadata = buildOriginMetadata("java-ijen");

export default function JavaIjenPage() {
  return <OriginDetailPage slug="java-ijen" />;
}
