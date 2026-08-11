export type PressReleaseSource = {
  href: string;
  title: string;
  sourceType: "page" | "pdf";
  sourceLabel: string;
  dateLabel?: string;
};

const sourceUrls = [
  "https://projectsouth.org/wp-content/uploads/2023/04/Press_Advisory__May_1_2023.pdf",
  "https://projectsouth.org/wp-content/uploads/2023/04/4-13-2023-SPLC-PS-Barrientos-Appeal-1.pdf",
  "https://projectsouth.org/wp-content/uploads/2023/04/rev_4_7_2023-SV-Death-in-ICE-Custody-Final.pdf",
  "https://projectsouth.org/wp-content/uploads/2023/02/Press-Release-for-FOIA-Briefing-Guide-Feb-2023.pdf",
  "https://projectsouth.org/wp-content/uploads/2016/04/11-7-22-SenateConfirmsAbuse_DetainedWomen-ICDC.pdf",
  "https://projectsouth.org/wp-content/uploads/2016/04/Immediate-Release-73-Organizations-Call-on-DHS-to-Issue-Findings.pdf",
  "https://projectsouth.org/wp-content/uploads/2016/04/press-release-stewart-detention-center-complaint-july-2022-3.pdf",
  "https://projectsouth.org/project-south-and-community-health-law-partnership-clinic-release-new-findings-about-local-law-enforcement-collaboration-with-ice/",
  "https://projectsouth.org/biden-to-break-more-promises-by-making-georgia-the-private-prison-capital-of-the-u-s-with-geo-mega-immigrant-detention-center/",
  "https://projectsouth.org/new-report-details-bidens-broken-promises-on-ending-the-use-of-private-prisons-in-federal-incarceration-and-immigration-detention/",
  "https://projectsouth.org/torture-and-deportation-of-cameroonian-refugees/",
  "https://projectsouth.org/new-report-details-abuse-and-trauma-of-immigrant-women-in-ice-detention-in-georgia/",
  "https://projectsouth.org/project-south-penn-law-transnational-legal-clinic-the-detention-watch-network-to-testify-before-inter-american-commission-on-human-rights-on-immigrant-human-rights-abuses/",
  "https://projectsouth.org/crew-project-south-and-national-immigration-project-release-new-ice-records-on-gynecological-abuse/",
  "https://projectsouth.org/ice-announces-its-cutting-the-irwin-county-detention-center-contract/",
  "https://projectsouth.org/after-years-of-advocacy-no-immigrant-women-are-currently-detained-at-the-irwin-county-detention-center/",
  "https://projectsouth.org/following-governments-forced-death-flight-deportations-and-torture-of-black-immigrants-advocates-seek-answers/",
  "https://projectsouth.org/first-death-in-ice-custody-under-the-biden-administration/",
  "https://projectsouth.org/legal-filing-reveals-growing-number-of-women-experienced-medical-abuse-in-ice-custody/",
  "https://projectsouth.org/groups-file-urgent-request-with-united-nations-on-behalf-of-immigrant-women-in-georgia-detention-center/",
  "https://projectsouth.org/government-accountability-project-and-project-south-condemn-deportation-of-ice-medical-abuse-survivors/",
  "https://projectsouth.org/civil-rights-advocates-win-reversal-of-discriminatory-city-utility-policies-in-court-settlement/",
  "https://projectsouth.org/crew-nipnlg-and-project-south-sue-ice-over-forced-sterilization-records/",
  "https://projectsouth.org/groups-file-foia-request-to-demand-transparency-and-accountability-for-medical-abuse-of-people-at-ice-detention-facilities/",
  "https://projectsouth.org/government-accountability-project-and-project-south-send-letter-to-congress-on-behalf-of-whistleblower-client/",
  "https://projectsouth.org/reported-death-in-detention-this-week-whistleblower-revelations-last-week-no-one-is-safe-in-ice-custody/",
  "https://projectsouth.org/whistleblowing-nurse-from-detention-center-in-georgia-reports-unsafe-practices-that-promote-the-spread-of-covid-19-in-ice-detention/",
  "https://projectsouth.org/advocates-decry-ices-inaction-and-ruthless-policies/",
  "https://projectsouth.org/the-epitome-of-greed/",
  "https://projectsouth.org/georgias-racial-justice-and-human-rights-groups-rebuke-ice-guidance/",
  "https://projectsouth.org/another-covid-19-tragedy/",
  "https://projectsouth.org/immigrants-in-georgia-ice-detention-center-sound-the-alarm-demand-immediate-release-as-state-becomes-epicenter-of-covid-19-crisis-in-southeast/",
  "https://projectsouth.org/eleventh-circuit-rules-federal-anti-trafficking-law-can-apply-to-private-immigrant-detention-corporations/",
  "https://projectsouth.org/immigrant-advocates-strongly-oppose-anti-sanctuary-bill-in-general-assembly/",
  "https://projectsouth.org/immigrants-rights-groups-hold-press-conference-and-graveside-service-to-remember-deceased-immigrant-buried-by-ice-in-unmarked-grave/",
  "https://projectsouth.org/stewart-detention-center-underscores-ongoing-abuse-and-racist-judge/",
  "https://projectsouth.org/eleventh-circuit-reverses-dismissal-of-lawsuit-challenging-policies-unlawfully-restricting-access-to-basic-utility-services/",
  "https://projectsouth.org/georgia-civil-rights-groups-support-federal-ethics-complaint/",
  "https://projectsouth.org/veto-sb-15-petition/",
  "https://projectsouth.org/forced-labor-claims-against-corecivic/",
  "https://projectsouth.org/sheriffs-practices-unconstitutionally-trample-upon-residents-rights/",
  "https://projectsouth.org/people-detained-in-stewart-detention-center-to-pursue-forced-labor-claims-against-corecivic/",
  "https://projectsouth.org/a-dream-deferred/",
  "https://projectsouth.org/human-rights-groups-release-report-on-conditions-of-the-atlanta-city-detention-center/",
  "https://projectsouth.org/reported-suicide-at-georgia-immigration-detention-center/",
  "https://projectsouth.org/groups-will-hold-atlanta-rally-following-supreme-court-decision-in-muslim-ban-case/",
  "https://projectsouth.org/project-south-calls-for-end-to-discriminatory-utilities-policies-in-southern-cities/",
  "https://projectsouth.org/rights-groups-call-upon-the-united-nations/",
  "https://projectsouth.org/private-prison-company-uses-forced-labor-of-detained-immigrants-in-georgia-to-boost-profits/",
  "https://projectsouth.org/immigrant-and-refugee-rights-groups-hold-press-conference-to-denounce-anti-immigrant-bill-sb-452/",
  "https://projectsouth.org/third-death-in-georgia-immigrant-detention-centers-in-less-than-a-year/",
  "https://projectsouth.org/70-organizations-ask-for-congressional-investigation/",
  "https://projectsouth.org/human-rights-groups-seek-hearing-at-the-inter-american-commission-on-human-rights/",
  "https://projectsouth.org/civil-rights-groups-to-host-peoples-tribunal-the-people-vs-muslim-ban-at-gsu-college-of-law-on-oct-9th/",
  "https://projectsouth.org/advocates-celebrate-victory-protecting-refugee-communities/",
  "https://projectsouth.org/advocates-call-for-closure-of-georgia-immigration-detention-centers/",
  "https://projectsouth.org/civil-rights-groups-challenge-policies-restricting-access-to-basic-utility-services/",
  "https://projectsouth.org/press-release-report-on-georgia-immigration-detention-centers/",
  "https://projectsouth.org/georgia-detention-watch-hosts-concert-for-the-incarcerated-calling-for-the-closure-of-atlanta-city-detention-center/",
  "https://projectsouth.org/groups-respond-to-anti-immigrant-bills/",
  "https://projectsouth.org/news-conference-in-reaction-to-executive-orders-on-immigration/",
  "https://projectsouth.org/ga-j20-sanctuary-city/",
  "https://projectsouth.org/atlanta-for-abolition-dismantle-the-prison-industrial-complex/",
  "https://projectsouth.org/project-souths-azadeh-shahshahani-to-join-international-tribunal-for-democracy-in-brazil/",
  "https://projectsouth.org/justice-for-berta/",
  "https://projectsouth.org/gdw-release-alaa-yasin/",
  "https://projectsouth.org/human-rights-groups-voice-demand-for-closure-of-the-stewart-detention-center/",
  "https://projectsouth.org/statement-condemning-the-raids/",
  "https://projectsouth.org/panel-discussion-to-shed-light-on-post-911-human-rights-abuses-affecting-muslims-black-communities-and-immigrant-communities-of-color/",
] as const;

const pdfMetadata: Record<string, { title: string; dateLabel?: string }> = {
  "Press_Advisory__May_1_2023.pdf": { title: "Press Advisory — May 1, 2023", dateLabel: "May 1, 2023" },
  "4-13-2023-SPLC-PS-Barrientos-Appeal-1.pdf": { title: "SPLC + Project South — Barrientos Appeal", dateLabel: "April 13, 2023" },
  "rev_4_7_2023-SV-Death-in-ICE-Custody-Final.pdf": { title: "Death in ICE Custody", dateLabel: "April 7, 2023" },
  "Press-Release-for-FOIA-Briefing-Guide-Feb-2023.pdf": { title: "Press Release for FOIA Briefing Guide", dateLabel: "February 2023" },
  "11-7-22-SenateConfirmsAbuse_DetainedWomen-ICDC.pdf": { title: "Senate Confirms Abuse of Detained Women at ICDC", dateLabel: "November 7, 2022" },
  "Immediate-Release-73-Organizations-Call-on-DHS-to-Issue-Findings.pdf": { title: "73 Organizations Call on DHS to Issue Findings" },
  "press-release-stewart-detention-center-complaint-july-2022-3.pdf": { title: "Stewart Detention Center Complaint", dateLabel: "July 2022" },
};

const acronyms: Record<string, string> = { ice: "ICE", ices: "ICE’s", covid: "COVID", foia: "FOIA", dhs: "DHS", sb: "SB", gsu: "GSU", gdw: "GDW", nipnlg: "NIPNLG" };

function titleFromSlug(href: string) {
  const slug = new URL(href).pathname.replace(/^\/+|\/+$/g, "").split("/").at(-1) || "Press release";
  return slug.split("-").map((word) => acronyms[word] || (word ? word[0].toUpperCase() + word.slice(1) : word)).join(" ")
    .replace(/Project Souths/g, "Project South’s")
    .replace(/Bidens/g, "Biden’s")
    .replace(/Georgias/g, "Georgia’s")
    .replace(/Governments/g, "Government’s")
    .replace(/Sheriffs/g, "Sheriff’s")
    .replace(/Peoples/g, "People’s")
    .replace(/Post 911/g, "Post-9/11")
    .replace(/U S/g, "U.S.");
}

export const pressReleases: PressReleaseSource[] = sourceUrls.map((href) => {
  const sourceType = href.toLowerCase().endsWith(".pdf") ? "pdf" : "page";
  if (sourceType === "pdf") {
    const filename = new URL(href).pathname.split("/").at(-1) || "";
    const metadata = pdfMetadata[filename];
    return { href, title: metadata?.title || filename.replace(/[-_]+/g, " ").replace(/\.pdf$/i, ""), sourceType, sourceLabel: "PDF release", dateLabel: metadata?.dateLabel };
  }
  return { href, title: titleFromSlug(href), sourceType, sourceLabel: "Project South page" };
});

export const pressArchiveCounts = {
  total: pressReleases.length,
  pages: pressReleases.filter((release) => release.sourceType === "page").length,
  pdfs: pressReleases.filter((release) => release.sourceType === "pdf").length,
} as const;
