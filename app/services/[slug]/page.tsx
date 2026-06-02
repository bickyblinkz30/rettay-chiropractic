import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle,
  Calendar,
  Phone,
  ChevronRight,
  Bone,
  ArrowUpDown,
  Activity,
  Zap,
  Heart,
  Car,
  Accessibility,
  Shield,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { AnimatedSection } from "@/components/animated-section";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { SchemaOrg } from "@/components/schema-org";
import { BUSINESS_INFO, SITE_CONFIG } from "@/lib/constants";
import { generateMetadata as genSeoMeta } from "@/lib/seo";

type ServiceDetail = {
  slug: string;
  title: string;
  icon: LucideIcon;
  description: string;
  heroSummary: string;
  overview: string;
  benefits: { title: string; description: string }[];
  process: { title: string; description: string }[];
  faqs: { question: string; answer: string }[];
};

const services: ServiceDetail[] = [
  {
    slug: "chiropractic-adjustments",
    title: "Chiropractic Adjustments",
    icon: Bone,
    description:
      "Precise, gentle spinal adjustments to restore alignment and optimize nervous system function.",
    heroSummary:
      "Restore proper spinal function and relieve pain with expert chiropractic adjustments tailored to your body.",
    overview:
      "Chiropractic adjustments — also known as spinal manipulations — are the cornerstone of chiropractic care. At Rettay Chiropractic, Dr. Lawrence Mikkelson uses precise, controlled force to restore mobility to joints that have become restricted due to tissue injury, repetitive stress, or prolonged poor posture. By realigning the spine and improving joint function, adjustments help reduce pain, decrease inflammation, and improve nervous system communication throughout the body. Each adjustment is customized to your unique anatomy and comfort level, ensuring a safe, effective, and gentle experience.",
    benefits: [
      {
        title: "Drug-Free Pain Relief",
        description:
          "Reduce or eliminate pain without relying on medications or invasive procedures.",
      },
      {
        title: "Improved Mobility & Flexibility",
        description:
          "Restore range of motion in restricted joints so you can move freely and comfortably.",
      },
      {
        title: "Enhanced Nervous System Function",
        description:
          "Remove interference in your spine to allow optimal communication between brain and body.",
      },
      {
        title: "Faster Injury Recovery",
        description:
          "Accelerate healing by improving circulation, reducing inflammation, and promoting tissue repair.",
      },
    ],
    process: [
      {
        title: "Comprehensive Consultation",
        description:
          "We begin with a thorough discussion of your health history, symptoms, and goals to determine if adjustments are right for you.",
      },
      {
        title: "Spinal Assessment",
        description:
          "Using physical exams and advanced diagnostic tools, we identify areas of misalignment, restriction, and nerve interference.",
      },
      {
        title: "Precision Adjustment",
        description:
          "Dr. Mikkelson applies a gentle, targeted thrust to the affected joint, restoring proper alignment and motion. Techniques vary based on your needs.",
      },
      {
        title: "Ongoing Care & Monitoring",
        description:
          "We track your progress and adjust your care plan as needed, ensuring lasting results and long-term spinal health.",
      },
    ],
    faqs: [
      {
        question: "What happens during a chiropractic adjustment?",
        answer:
          "During an adjustment, you lie on a specialized table while Dr. Mikkelson applies a quick, precise thrust to a restricted joint. You may hear a popping sound — that is simply gas being released from the joint, similar to cracking your knuckles. The procedure is safe, controlled, and typically painless. Many patients feel immediate relief and improved mobility afterward.",
      },
      {
        question: "Are chiropractic adjustments safe?",
        answer:
          "Yes. Chiropractic adjustments are recognized as one of the safest drug-free, non-invasive therapies available for the treatment of neuromusculoskeletal conditions. Dr. Mikkelson tailors each adjustment to your specific condition and comfort level, and serious complications are extremely rare. We always conduct a full evaluation before treatment to ensure adjustments are appropriate for you.",
      },
      {
        question: "How many adjustment sessions will I need?",
        answer:
          "The number of sessions varies based on the severity and duration of your condition. Some patients experience significant relief after just a few visits, while chronic issues may require a longer care plan. After your initial assessment, Dr. Mikkelson will recommend a personalized treatment schedule and discuss your expected recovery timeline.",
      },
      {
        question: "Does getting adjusted hurt?",
        answer:
          "Most patients do not experience pain during an adjustment. You may feel some mild soreness or achiness afterward — similar to what you might feel after exercising — but this typically subsides within 24 hours. The vast majority of patients find adjustments to be comfortable and even relieving.",
      },
    ],
  },
  {
    slug: "spinal-alignment",
    title: "Spinal Alignment",
    icon: ArrowUpDown,
    description:
      "Comprehensive spinal correction techniques to improve posture and alleviate pain.",
    heroSummary:
      "Achieve optimal spinal health through comprehensive alignment techniques that correct misalignments and enhance overall well-being.",
    overview:
      "Proper spinal alignment is fundamental to your overall health. When your spine is misaligned — whether from poor posture, injury, or daily wear and tear — it can lead to pain, reduced mobility, and disrupted nervous system function. At Rettay Chiropractic, our spinal alignment program goes beyond simple adjustments. We use a combination of manual techniques, instrument-assisted corrections, and supportive therapies to gradually restore your spine to its natural, healthy position. The result is not just pain relief, but improved energy, better posture, and a body that functions at its best.",
    benefits: [
      {
        title: "Lasting Postural Improvement",
        description:
          "Correct spinal alignment naturally improves your posture, reducing strain on muscles and joints.",
      },
      {
        title: "Reduced Nerve Interference",
        description:
          "A properly aligned spine eliminates pressure on nerves, allowing your body to communicate and heal more effectively.",
      },
      {
        title: "Chronic Pain Relief",
        description:
          "Address the root cause of chronic back, neck, and joint pain by correcting underlying structural issues.",
      },
      {
        title: "Enhanced Overall Health",
        description:
          "Spinal alignment supports better organ function, improved circulation, and a stronger immune system.",
      },
    ],
    process: [
      {
        title: "Full Spine Evaluation",
        description:
          "We perform a comprehensive analysis of your spine using physical exams, postural analysis, and digital imaging to identify areas of misalignment.",
      },
      {
        title: "Customized Correction Plan",
        description:
          "Based on your evaluation, Dr. Mikkelson creates a personalized alignment plan targeting specific areas of your spine.",
      },
      {
        title: "Progressive Alignment Sessions",
        description:
          "Through a series of carefully calibrated adjustments and therapies, we gradually guide your spine back into proper alignment.",
      },
      {
        title: "Maintenance & Prevention",
        description:
          "Once optimal alignment is achieved, we provide ongoing care to maintain your results and prevent future misalignments.",
      },
    ],
    faqs: [
      {
        question: "What causes spinal misalignment?",
        answer:
          "Spinal misalignment can result from a variety of factors including poor posture, repetitive motions, improper lifting, prolonged sitting, auto accidents, sports injuries, and the natural aging process. Even everyday activities like sleeping in an awkward position or carrying a heavy bag can contribute over time.",
      },
      {
        question: "How long does it take to correct spinal alignment?",
        answer:
          "The timeline varies by individual. Some patients see significant improvement in 4-6 weeks, while chronic or severe misalignments may take several months. Consistency with your care plan and following at-home recommendations are key factors in how quickly you achieve lasting alignment.",
      },
      {
        question: "Can spinal alignment improve my posture?",
        answer:
          "Absolutely. Poor posture is often a symptom of underlying spinal misalignment. By correcting the structural issues in your spine, our alignment program naturally improves your posture — helping you stand taller, sit more comfortably, and move with greater ease.",
      },
      {
        question: "Is spinal alignment treatment painful?",
        answer:
          "No. Our spinal alignment techniques are gentle and tailored to your comfort level. Some patients experience mild temporary soreness as their body adjusts to the changes, but the treatments themselves are not painful. In fact, most patients find them relaxing.",
      },
    ],
  },
  {
    slug: "sciatica-treatment",
    title: "Sciatica Treatment",
    icon: Activity,
    description:
      "Targeted relief for sciatic nerve pain with proven, non-invasive treatment methods.",
    heroSummary:
      "Find lasting relief from sciatic nerve pain with non-invasive treatments that address the root cause of your discomfort.",
    overview:
      "Sciatica is a debilitating condition characterized by sharp, radiating pain that travels from your lower back down through your leg, often accompanied by numbness, tingling, or weakness. At Rettay Chiropractic, we take a targeted approach to sciatica treatment by first identifying the underlying cause — whether it's a herniated disc, piriformis syndrome, or spinal misalignment. Through gentle spinal adjustments, decompression therapy, and soft tissue work, we relieve pressure on the sciatic nerve, reduce inflammation, and restore normal function — all without drugs or surgery.",
    benefits: [
      {
        title: "Non-Invasive Nerve Relief",
        description:
          "Relieve pressure on the sciatic nerve without risky surgery or dependency on pain medication.",
      },
      {
        title: "Reduced Inflammation",
        description:
          "Our techniques help decrease inflammation around the nerve root, providing lasting relief from pain and discomfort.",
      },
      {
        title: "Improved Mobility",
        description:
          "Regain the ability to walk, sit, and sleep comfortably without the constant distraction of sciatic pain.",
      },
      {
        title: "Prevention of Recurrence",
        description:
          "We strengthen supporting muscles and correct underlying issues to help prevent future flare-ups.",
      },
    ],
    process: [
      {
        title: "Neurological & Orthopedic Assessment",
        description:
          "We conduct a thorough evaluation to pinpoint the exact cause of your sciatica, including nerve testing and range-of-motion analysis.",
      },
      {
        title: "Spinal Decompression & Adjustments",
        description:
          "Gentle decompression techniques and targeted adjustments relieve pressure on the affected nerve root and restore spinal alignment.",
      },
      {
        title: "Soft Tissue Therapy",
        description:
          "We address tight muscles — particularly the piriformis — that may be compressing the sciatic nerve, using targeted massage and myofascial release.",
      },
      {
        title: "Rehabilitation & Prevention",
        description:
          "Strengthening exercises, stretches, and lifestyle guidance help prevent sciatica from returning and keep you moving pain-free.",
      },
    ],
    faqs: [
      {
        question: "What causes sciatica?",
        answer:
          "Sciatica is most commonly caused by a herniated disc, spinal stenosis, or piriformis syndrome that compresses or irritates the sciatic nerve. Other causes include spondylolisthesis, muscle spasms, or repetitive stress injuries. Dr. Mikkelson will perform a thorough evaluation to determine the specific cause of your symptoms.",
      },
      {
        question: "How long does it take to get relief from sciatica?",
        answer:
          "Many patients experience significant relief within the first few visits. Acute cases often respond quickly, while chronic sciatica may require several weeks of consistent care. We'll discuss your expected recovery timeline during your initial consultation.",
      },
      {
        question: "Do I need surgery for sciatica?",
        answer:
          "In most cases, no. Chiropractic care is a highly effective, non-surgical treatment option for sciatica. Surgery is typically only recommended when conservative treatments have failed and severe nerve damage is present. We recommend exploring chiropractic care first before considering invasive options.",
      },
      {
        question: "Can exercise help or worsen sciatica?",
        answer:
          "Certain exercises can help relieve sciatica by strengthening supporting muscles and improving flexibility. However, the wrong exercises can aggravate the condition. We provide a personalized exercise program designed specifically for your condition to ensure safe, effective recovery.",
      },
    ],
  },
  {
    slug: "sports-injury-recovery",
    title: "Sports Injury Recovery",
    icon: Zap,
    description:
      "Accelerate healing and return to peak performance with specialized sports rehabilitation.",
    heroSummary:
      "Get back in the game faster with sports-focused chiropractic care designed to heal injuries and optimize performance.",
    overview:
      "Whether you're a weekend warrior or a competitive athlete, sports injuries can sideline you from the activities you love. At Rettay Chiropractic, our sports injury recovery program combines advanced chiropractic techniques with targeted rehabilitation to help you heal efficiently and return to peak performance. We treat a wide range of sports-related conditions — from sprains and strains to joint injuries and overuse syndromes — addressing not just the symptoms but the underlying biomechanical issues that contributed to the injury. Our goal is not just to get you back in the game, but to help you perform better and reduce your risk of future injury.",
    benefits: [
      {
        title: "Faster Return to Sport",
        description:
          "Accelerate healing through targeted treatments that reduce inflammation, improve circulation, and promote tissue repair.",
      },
      {
        title: "Improved Performance",
        description:
          "Optimize joint function, range of motion, and biomechanics to enhance your athletic performance.",
      },
      {
        title: "Reduced Re-Injury Risk",
        description:
          "Address underlying imbalances and weaknesses to prevent the same injury from recurring.",
      },
      {
        title: "Drug-Free Recovery",
        description:
          "Heal naturally without relying on pain medications or anti-inflammatories that can mask symptoms and delay full recovery.",
      },
    ],
    process: [
      {
        title: "Sports Injury Assessment",
        description:
          "We evaluate your injury in the context of your sport, analyzing movement patterns and identifying biomechanical contributors.",
      },
      {
        title: "Active Recovery & Pain Relief",
        description:
          "Using adjustments, soft tissue therapy, and modalities like ice/heat, we reduce pain and inflammation while promoting healing.",
      },
      {
        title: "Functional Rehabilitation",
        description:
          "We guide you through sport-specific exercises and stretches that restore strength, flexibility, and proper movement patterns.",
      },
      {
        title: "Performance Optimization",
        description:
          "Once healed, we fine-tune your biomechanics to improve performance and prevent future injuries, helping you reach new goals.",
      },
    ],
    faqs: [
      {
        question: "How soon can I return to my sport after an injury?",
        answer:
          "Return-to-sport timing depends on the severity of your injury and how well you respond to treatment. We follow a phased approach — moving from pain relief to rehabilitation to sport-specific training — and only clear you for full activity when you're ready. Rushing recovery increases re-injury risk, so we prioritize safe, sustainable healing.",
      },
      {
        question: "Will chiropractic care prevent future sports injuries?",
        answer:
          "Yes. By correcting biomechanical imbalances, improving joint function, and strengthening supporting muscles, chiropractic care significantly reduces your risk of future injuries. Many athletes use regular chiropractic care as a preventive tool to stay healthy and perform at their best.",
      },
      {
        question: "Do you treat all types of sports injuries?",
        answer:
          "We treat a wide range of sports-related conditions including sprains, strains, tendonitis, joint injuries, shin splints, runner's knee, tennis elbow, and more. If we determine your condition requires specialized medical attention, we'll refer you to the appropriate specialist.",
      },
      {
        question: "What techniques do you use for sports injury recovery?",
        answer:
          "We use a combination of chiropractic adjustments, soft tissue therapy (including Graston technique and myofascial release), therapeutic exercises, and modalities such as cold laser therapy and electrical stimulation — all tailored to your specific injury and sport.",
      },
    ],
  },
  {
    slug: "neck-back-pain-treatment",
    title: "Neck & Back Pain Treatment",
    icon: Heart,
    description:
      "Effective relief for chronic and acute neck and back pain through personalized care plans.",
    heroSummary:
      "Escape the cycle of neck and back pain with personalized treatment plans that target the root cause of your discomfort.",
    overview:
      "Neck and back pain are among the most common reasons people seek chiropractic care — and for good reason. These conditions can significantly impact your quality of life, making it difficult to work, sleep, and enjoy daily activities. At Rettay Chiropractic, we take a comprehensive approach to neck and back pain treatment. Rather than simply masking symptoms, Dr. Mikkelson identifies the underlying causes — whether from poor posture, muscle imbalances, disc issues, or joint dysfunction — and creates a personalized treatment plan to address them. Our goal is lasting relief and restored function, so you can get back to living without limitations.",
    benefits: [
      {
        title: "Effective Pain Relief",
        description:
          "Reduce or eliminate neck and back pain through targeted adjustments and therapies that address the root cause.",
      },
      {
        title: "Improved Range of Motion",
        description:
          "Regain the ability to turn your head, bend, and move freely without stiffness or discomfort.",
      },
      {
        title: "Better Sleep Quality",
        description:
          "Pain-free nights lead to better rest. Many patients report significant improvement in sleep after starting treatment.",
      },
      {
        title: "Reduced Inflammation",
        description:
          "Our treatments help decrease inflammation in affected areas, promoting natural healing and long-term relief.",
      },
    ],
    process: [
      {
        title: "Pain & Posture Assessment",
        description:
          "We evaluate your pain patterns, posture, and spinal health to identify the root cause of your neck or back pain.",
      },
      {
        title: "Targeted Chiropractic Care",
        description:
          "Gentle adjustments and soft tissue work relieve pressure on affected joints, nerves, and muscles.",
      },
      {
        title: "Therapeutic Exercises",
        description:
          "We prescribe specific stretches and strengthening exercises to support your spine and prevent recurrence.",
      },
      {
        title: "Long-Term Management",
        description:
          "We provide ergonomic guidance, lifestyle recommendations, and ongoing care to maintain your results and prevent future issues.",
      },
    ],
    faqs: [
      {
        question: "What causes neck and back pain?",
        answer:
          "Common causes include poor posture (especially from desk work and phone use), muscle strain, herniated discs, spinal misalignment, arthritis, and injuries from accidents or sports. Stress and poor sleep habits can also contribute to muscle tension and pain.",
      },
      {
        question: "How quickly will I feel relief?",
        answer:
          "Many patients experience noticeable relief after their first visit. Acute pain often responds quickly, while chronic conditions may take more time. We'll discuss your expected recovery timeline during your initial consultation and adjust your treatment plan based on your progress.",
      },
      {
        question: "Do I need X-rays before treatment?",
        answer:
          "X-rays or other imaging may be recommended if we suspect fractures, severe disc pathology, or other structural issues. Dr. Mikkelson will determine if imaging is necessary based on your health history and physical examination findings.",
      },
      {
        question: "Can poor posture really cause this much pain?",
        answer:
          "Absolutely. Prolonged poor posture — such as sitting hunched over a computer or looking down at a phone — places enormous strain on your spine and supporting muscles. Over time, this leads to misalignment, muscle fatigue, joint dysfunction, and chronic pain. Postural correction is often a key part of treatment.",
      },
    ],
  },
  {
    slug: "auto-injury-care",
    title: "Auto Injury Care",
    icon: Car,
    description:
      "Expert treatment for whiplash and auto accident injuries to facilitate full recovery.",
    heroSummary:
      "Recover fully from auto accident injuries with specialized chiropractic care that addresses whiplash, soft tissue damage, and more.",
    overview:
      "Auto accidents — even minor fender benders — can cause significant injury to your spine and soft tissues. Whiplash, the most common auto injury, occurs when your head is suddenly jerked forward and backward, straining the muscles and ligaments in your neck. However, injuries can also affect your mid and lower back, causing pain that may not appear for days or even weeks after the accident. At Rettay Chiropractic, we specialize in auto injury care. We conduct thorough examinations to identify all injuries — including those that may not be immediately symptomatic — and develop comprehensive treatment plans to ensure full recovery and prevent chronic issues.",
    benefits: [
      {
        title: "Comprehensive Injury Detection",
        description:
          "We identify both obvious and hidden injuries, ensuring nothing is overlooked in your recovery.",
      },
      {
        title: "Whiplash & Soft Tissue Recovery",
        description:
          "Specialized techniques to heal damaged soft tissues and restore proper neck function after whiplash.",
      },
      {
        title: "Pain Relief Without Medication",
        description:
          "Manage pain naturally without relying on prescription painkillers or anti-inflammatories.",
      },
      {
        title: "Insurance & Legal Support",
        description:
          "We provide detailed documentation for your insurance claims and legal case, and work with PIP and personal injury protection.",
      },
    ],
    process: [
      {
        title: "Accident & Injury Assessment",
        description:
          "We take a detailed history of the accident and conduct a thorough physical exam to identify all injuries, including delayed-onset symptoms.",
      },
      {
        title: "Acute Care & Pain Management",
        description:
          "Gentle adjustments, soft tissue therapy, and modalities reduce pain, inflammation, and muscle spasms in the acute phase.",
      },
      {
        title: "Rehabilitation & Strengthening",
        description:
          "Targeted exercises restore strength, flexibility, and range of motion to damaged areas.",
      },
      {
        title: "Full Recovery & Prevention",
        description:
          "We ensure complete healing and provide guidance to prevent chronic issues and long-term complications.",
      },
    ],
    faqs: [
      {
        question: "Should I see a chiropractor after a car accident even if I don't feel pain?",
        answer:
          "Yes. Many auto accident injuries — particularly whiplash — don't cause pain immediately due to adrenaline and shock. Symptoms can appear days or even weeks later. Seeing a chiropractor promptly after an accident allows us to identify and treat injuries early, preventing them from becoming chronic problems.",
      },
      {
        question: "What if I don't feel pain immediately after the accident?",
        answer:
          "It's very common for pain and stiffness to appear 24-72 hours after an accident, sometimes longer. This delayed onset occurs because adrenaline masks pain at the scene. We always recommend getting checked out even if you feel fine, as early intervention leads to better outcomes.",
      },
      {
        question: "Will my insurance cover auto injury chiropractic care?",
        answer:
          "Auto insurance policies often include Personal Injury Protection (PIP) that covers chiropractic care after an accident. We work with most major insurance providers and can help you understand your coverage. We also provide detailed documentation for your claim.",
      },
      {
        question: "How long does auto injury recovery take?",
        answer:
          "Recovery time varies based on the severity of your injuries. Minor soft tissue injuries may heal in 4-6 weeks, while more significant injuries can require several months of care. We'll provide a personalized treatment plan and timeline after your initial evaluation.",
      },
    ],
  },
  {
    slug: "posture-correction",
    title: "Posture Correction",
    icon: Accessibility,
    description:
      "Improve your posture and prevent future pain with our posture correction programs.",
    heroSummary:
      "Transform your posture and prevent pain with a structured correction program that retrains your body for optimal alignment.",
    overview:
      "Poor posture has become an epidemic in our modern world, with hours of sitting, screen use, and device hunching taking a toll on our spines. Beyond appearance, poor posture can lead to chronic pain, headaches, reduced lung capacity, digestive issues, and accelerated joint degeneration. At Rettay Chiropractic, our posture correction program takes a holistic approach. We combine spinal adjustments, postural exercises, ergonomic guidance, and habit retraining to gradually correct postural imbalances. The result is not just a better appearance — it's reduced pain, improved breathing, more energy, and a healthier spine for life.",
    benefits: [
      {
        title: "Visibly Better Posture",
        description:
          "Stand taller, sit straighter, and move with greater poise and confidence.",
      },
      {
        title: "Chronic Pain Reduction",
        description:
          "Eliminate the muscle strain and joint stress caused by poor posture, relieving associated pain.",
      },
      {
        title: "Improved Confidence & Presence",
        description:
          "Good posture projects confidence and can positively impact how others perceive you — and how you feel about yourself.",
      },
      {
        title: "Prevention of Future Problems",
        description:
          "Correcting posture now prevents the development of arthritis, disc degeneration, and chronic pain later in life.",
      },
    ],
    process: [
      {
        title: "Postural Assessment",
        description:
          "We analyze your standing and sitting posture, spinal curves, and muscle imbalances using visual assessment and postural tools.",
      },
      {
        title: "Corrective Adjustments",
        description:
          "Gentle chiropractic adjustments help restore proper spinal alignment, making it easier for your body to maintain good posture.",
      },
      {
        title: "Strengthening & Stretching",
        description:
          "We prescribe targeted exercises to strengthen weak postural muscles and stretch tight ones that pull you out of alignment.",
      },
      {
        title: "Ergonomic & Habit Training",
        description:
          "We provide practical guidance on workstation setup, sleep positions, and daily habits that support lasting postural improvement.",
      },
    ],
    faqs: [
      {
        question: "Can poor posture really be corrected?",
        answer:
          "Absolutely. While it takes time and consistency, poor posture can be corrected at any age. The spine is adaptable, and with regular chiropractic adjustments, targeted exercises, and conscious habit changes, you can significantly improve your posture. The key is addressing both the structural and behavioral components.",
      },
      {
        question: "How long does it take to correct posture?",
        answer:
          "Most patients begin to see noticeable improvements within 4-8 weeks of consistent care. Complete postural transformation typically takes 3-6 months, depending on the severity of the misalignment and your commitment to at-home exercises and ergonomic changes.",
      },
      {
        question: "What exercises help improve posture?",
        answer:
          "Exercises that strengthen the upper back, core, and glutes while stretching the chest, hip flexors, and hamstrings are most effective. We'll prescribe a personalized exercise program based on your specific postural imbalances, including any necessary corrections for forward head posture, rounded shoulders, or anterior pelvic tilt.",
      },
      {
        question: "Can chiropractic really fix my posture?",
        answer:
          "Chiropractic care is one of the most effective approaches to posture correction. While exercises strengthen muscles, chiropractic adjustments actually correct the underlying spinal misalignments that make good posture difficult to maintain. The combination of adjustments, exercises, and ergonomic changes produces the best results.",
      },
    ],
  },
  {
    slug: "wellness-care",
    title: "Wellness Care",
    icon: Shield,
    description:
      "Maintain optimal health and prevent injuries with ongoing chiropractic wellness care.",
    heroSummary:
      "Invest in your long-term health with proactive chiropractic wellness care that keeps your body functioning at its best.",
    overview:
      "Wellness care is about more than just treating symptoms — it's a proactive approach to health that keeps your body functioning optimally. At Rettay Chiropractic, our wellness care program is designed for patients who want to maintain their health, prevent future injuries, and optimize their physical performance. Through regular chiropractic adjustments, lifestyle guidance, and preventive screenings, we help you stay ahead of potential issues before they become painful problems. Whether you're looking to maintain the results of previous treatment or simply want to invest in your long-term health, our wellness program provides the ongoing support your body needs.",
    benefits: [
      {
        title: "Preventive Health Maintenance",
        description:
          "Regular adjustments help prevent minor misalignments from becoming painful, chronic conditions.",
      },
      {
        title: "Improved Immune Function",
        description:
          "A properly functioning nervous system supports a stronger immune response, helping you stay healthier year-round.",
      },
      {
        title: "Better Sleep & Energy",
        description:
          "Patients on a wellness care plan consistently report better sleep quality, higher energy levels, and improved mood.",
      },
      {
        title: "Long-Term Health Optimization",
        description:
          "Ongoing care ensures your spine and nervous system remain in peak condition, supporting every aspect of your health.",
      },
    ],
    process: [
      {
        title: "Wellness Assessment",
        description:
          "We evaluate your current health status, spinal condition, and wellness goals to create a personalized maintenance plan.",
      },
      {
        title: "Regular Maintenance Adjustments",
        description:
          "Scheduled adjustments keep your spine aligned and your nervous system functioning optimally, preventing problems before they start.",
      },
      {
        title: "Lifestyle & Nutritional Guidance",
        description:
          "We provide ongoing recommendations on exercise, nutrition, ergonomics, and stress management to support your overall wellness.",
      },
      {
        title: "Periodic Progress Evaluations",
        description:
          "Regular check-ins ensure your care plan evolves with your needs and continues to support your health goals effectively.",
      },
    ],
    faqs: [
      {
        question: "How often should I visit for wellness care?",
        answer:
          "The frequency depends on your individual health status and goals. Many wellness patients visit once a month for a maintenance adjustment, while others benefit from visits every 2-4 weeks. We'll recommend a schedule based on your needs and adjust as your condition stabilizes.",
      },
      {
        question: "Is wellness care really necessary if I'm not in pain?",
        answer:
          "Absolutely. Wellness care is about prevention — similar to seeing a dentist for regular cleanings even when your teeth don't hurt. Regular chiropractic care helps detect and correct minor issues before they develop into painful conditions, keeping your spine and nervous system healthy for the long term.",
      },
      {
        question: "What are the long-term benefits of wellness care?",
        answer:
          "Long-term benefits include reduced risk of chronic pain, better posture, improved mobility as you age, enhanced immune function, better sleep quality, and overall improved quality of life. Many wellness patients report feeling more energetic, resilient, and healthier than their peers.",
      },
      {
        question: "Can wellness care prevent future injuries?",
        answer:
          "Yes. By maintaining proper spinal alignment, optimal joint function, and balanced muscle tone, your body is better equipped to handle physical stress and less likely to suffer injury. Wellness care is especially beneficial for athletes, active individuals, and those with physically demanding jobs.",
      },
    ],
  },
];

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};

  return genSeoMeta({
    title: service.title,
    description: `${service.description} ${SITE_CONFIG.shortName} in ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.state}. Schedule an appointment today.`,
    canonical: `${SITE_CONFIG.url}/services/${slug}`,
  });
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  const Icon = service.icon;

  return (
    <>
      <SchemaOrg
        type="BreadcrumbList"
        breadcrumbs={[
          { name: "Home", url: "/" },
          { name: "Services", url: "/services" },
          { name: service.title, url: `/services/${slug}` },
        ]}
      />

      {/* Breadcrumb */}
      <nav
        className="bg-secondary/80 border-b border-border/50"
        aria-label="Breadcrumb"
      >
        <div className="container-wide py-3">
          <ol className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" />
            <li>
              <Link
                href="/services"
                className="hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>
            <ChevronRight className="h-3.5 w-3.5" />
            <li className="text-foreground font-medium truncate">
              {service.title}
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Banner */}
      <section
        className="relative min-h-[50vh] flex items-center overflow-hidden"
        aria-label={`${service.title} hero`}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-wide relative z-10 py-24 lg:py-32">
          <AnimatedSection as="div" className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm">
                <Icon className="h-8 w-8 text-accent" />
              </div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                Our Services
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-[1.1] tracking-tight">
              {service.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-primary-200 max-w-xl leading-relaxed">
              {service.heroSummary}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Appointment
                </Link>
              </Button>
              <Button size="xl" variant="outline-light" asChild>
                <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call: {BUSINESS_INFO.phoneFormatted}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding" aria-labelledby="overview-title">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <AnimatedSection
              direction="left"
              as="div"
              className="lg:col-span-3"
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                Overview
              </span>
              <h2
                id="overview-title"
                className="text-3xl sm:text-4xl font-display font-bold mt-3"
              >
                What is{" "}
                <span className="text-primary">{service.title}</span>?
              </h2>
              <div className="mt-6 text-muted-foreground text-lg leading-relaxed">
                {service.overview}
              </div>
            </AnimatedSection>

            <AnimatedSection
              direction="right"
              delay={0.15}
              as="div"
              className="lg:col-span-2"
            >
              <div className="bg-gradient-to-br from-primary-50 to-primary-100/50 rounded-2xl p-8 lg:p-10 border border-primary-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-primary text-white shrink-0">
                    <Icon className="h-8 w-8" />
                  </div>
                  <div>
                    <p className="text-xl font-display font-bold text-primary">
                      {service.title}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      At {SITE_CONFIG.shortName}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-6 pt-6 border-t border-primary-200/50">
                  <Button size="lg" variant="default" asChild>
                    <Link href="/contact">
                      <Calendar className="h-4 w-4 mr-2" />
                      Book an Appointment
                    </Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section
        className="section-padding bg-secondary/50"
        aria-labelledby="benefits-title"
      >
        <div className="container-wide">
          <AnimatedSection
            as="div"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              Why Choose This Service
            </span>
            <h2
              id="benefits-title"
              className="text-3xl sm:text-4xl font-display font-bold mt-3"
            >
              Benefits of {service.title}
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Discover how this treatment can help you achieve better health and
              lasting relief.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {service.benefits.map((benefit, index) => (
              <AnimatedSection
                key={benefit.title}
                as="div"
                delay={index * 0.1}
              >
                <div className="bg-white rounded-2xl p-6 lg:p-8 border border-border/60 shadow-soft h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent/10 text-accent shrink-0 mt-1">
                      <CheckCircle className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Process */}
      <section
        className="section-padding"
        aria-labelledby="process-title"
      >
        <div className="container-wide">
          <AnimatedSection
            as="div"
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">
              How It Works
            </span>
            <h2
              id="process-title"
              className="text-3xl sm:text-4xl font-display font-bold mt-3"
            >
              Our Treatment Process
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              A step-by-step approach designed to deliver the best possible
              outcomes for your condition.
            </p>
          </AnimatedSection>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary-100 -translate-x-1/2" />
            <div className="space-y-12 lg:space-y-0">
              {service.process.map((step, index) => (
                <AnimatedSection
                  key={step.title}
                  as="div"
                  delay={index * 0.12}
                  className="relative"
                >
                  <div
                    className={`flex flex-col lg:flex-row items-start gap-6 lg:gap-12 ${
                      index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                    }`}
                  >
                    <div className="flex-1 lg:w-1/2">
                      <div
                        className={`bg-white rounded-2xl p-6 lg:p-8 border border-border/60 shadow-soft ${
                          index % 2 === 0 ? "lg:text-right" : ""
                        }`}
                      >
                        <div
                          className={`flex items-center gap-4 mb-4 ${
                            index % 2 === 0 ? "lg:flex-row-reverse" : ""
                          }`}
                        >
                          <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary-50 text-primary shrink-0">
                            <span className="text-lg font-display font-bold">
                              {index + 1}
                            </span>
                          </div>
                          <h3 className="text-xl font-semibold">
                            {step.title}
                          </h3>
                        </div>
                        <p
                          className={`text-muted-foreground leading-relaxed ${
                            index % 2 === 0 ? "lg:text-left" : ""
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>

                    <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shrink-0 relative z-10 mx-auto lg:mx-0 lg:absolute lg:left-1/2 lg:-translate-x-1/2">
                      <span className="text-lg font-display font-bold">
                        {index + 1}
                      </span>
                    </div>

                    <div className="flex-1 lg:w-1/2 hidden lg:block" />
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section
        className="section-padding bg-secondary/50"
        aria-labelledby="faq-title"
      >
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection as="div" className="text-center mb-12">
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                FAQ
              </span>
              <h2
                id="faq-title"
                className="text-3xl sm:text-4xl font-display font-bold mt-3"
              >
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-muted-foreground text-lg">
                Common questions about {service.title.toLowerCase()}.
              </p>
            </AnimatedSection>

            <AnimatedSection as="div" delay={0.1}>
              <div className="bg-white rounded-2xl border border-border/60 shadow-soft overflow-hidden">
                <Accordion type="single" collapsible className="divide-y divide-border">
                  {service.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="px-6 py-5 text-base font-semibold hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>

            <SchemaOrg
              type="FAQPage"
              faqs={service.faqs}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="section-padding bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 relative overflow-hidden"
        aria-labelledby="cta-title"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary-400/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-accent/10 blur-3xl" />

        <div className="container-wide relative z-10">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2
              id="cta-title"
              className="text-3xl sm:text-4xl font-display font-bold text-white"
            >
              Ready to Experience {service.title}?
            </h2>
            <p className="mt-4 text-lg text-primary-200 leading-relaxed">
              Take the first step toward better health. Schedule your
              appointment at {SITE_CONFIG.shortName} in{" "}
              {BUSINESS_INFO.address.city}, KY today.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="accent" asChild>
                <Link href="/contact">
                  <Calendar className="h-5 w-5 mr-2" />
                  Schedule Appointment
                </Link>
              </Button>
              <Button size="xl" variant="outline-light" asChild>
                <a href={`tel:${BUSINESS_INFO.phoneLink}`}>
                  <Phone className="h-5 w-5 mr-2" />
                  Call {BUSINESS_INFO.phoneFormatted}
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
