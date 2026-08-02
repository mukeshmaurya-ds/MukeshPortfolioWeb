import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/contact-schema";
import { transporter } from "@/lib/email";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const contentLength = request.headers.get("content-length");

    if (
      contentLength &&
      Number(contentLength) > 20_000
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Request too large.",
        },
        {
          status: 413,
        }
      );
    }

    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          errors: parsed.error.flatten(),
        },
        {
          status: 400,
        }
      );
    }

    if (parsed.data.website) {
      return NextResponse.json(
        {
          success: true,
        },
        {
          status: 200,
        }
      );
    }

    const name = parsed.data.name.trim();

    const email = parsed.data.email.trim();

    const subject = parsed.data.subject.trim();

    const message = parsed.data.message.trim();

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,

      to: process.env.CONTACT_EMAIL,

      replyTo: email,

      subject: `[Portfolio] ${subject}`,

      text: `
Name: ${name}

Email: ${email}

Subject: ${subject}

Message:

${message}
`,

      html: `
<h2>Portfolio Contact</h2>

<p><strong>Name:</strong> ${name}</p>

<p><strong>Email:</strong> ${email}</p>

<p><strong>Subject:</strong> ${subject}</p>

<hr>

<p>${message.replace(/\n/g, "<br>")}</p>
`,
    });

    return NextResponse.json({
      success: true,
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong.",
      },
      {
        status: 500,
      }
    );
  }
}