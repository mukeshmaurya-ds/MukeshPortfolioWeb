import { certifications } from "@/content/certifications";
import CertificationCard from "./CertificationCard";

export default function CertificationGrid() {
  const featuredCertificates = certifications.filter(
    (certificate) => certificate.featured
  );

  const otherCertificates = certifications.filter(
    (certificate) => !certificate.featured
  );

  return (
    <div className="space-y-12">
      {/* Featured Certifications */}

      {featuredCertificates.length > 0 && (
        <div>
          <h3 className="mb-8 text-2xl font-bold text-white-400">
            Featured Certifications
          </h3>

          <div
            className="
              grid
              gap-8
              md:grid-cols-2
            "
          >
            {featuredCertificates.map((certificate) => (
              <CertificationCard
                key={certificate.id}
                certification={certificate}
              />
            ))}
          </div>
        </div>
      )}

      {/* Other Certifications */}

      {otherCertificates.length > 0 && (
        <div>
          <h3 className="mb-8 text-2xl font-bold text-white-400">
            More Certifications
          </h3>

          <div
            className="
              grid
              gap-8
              sm:grid-cols-2
              lg:grid-cols-3
            "
          >
            {otherCertificates.map((certificate) => (
              <CertificationCard
                key={certificate.id}
                certification={certificate}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}