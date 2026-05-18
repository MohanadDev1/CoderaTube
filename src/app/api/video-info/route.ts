import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { url } = await request.json();

    if (!url) {
      return NextResponse.json(
        { error: 'URL is required' },
        { status: 400 }
      );
    }

    // هنا نحن نستخدم خدمة مجانية (Cobalt API) تقوم بكل العمل الشاق بدلاً من سيرفر محلي
    // هذه الطريقة مثالية لـ Vercel ولا تحتاج أي إعدادات إضافية أو Docker أو VPS
    
    // إعداد الطلب للحصول على الفيديو أو الصوت
    const cobaltApiUrl = "https://co.wuk.sh/api/json"; 

    // جلب رابط الفيديو بجودة 1080p (كمثال افتراضي للاختبار)
    const videoResponse = await fetch(cobaltApiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url: url,
        vQuality: '1080',
        filenamePattern: 'classic',
      })
    });

    const data = await videoResponse.json();

    if (data.status === 'error') {
      throw new Error(data.text || "Failed to process video");
    }

    // تحديد المنصة
    const platform = url.includes("youtube") ? "YouTube" : 
                     url.includes("tiktok") ? "TikTok" : 
                     url.includes("twitter") || url.includes("x.com") ? "Twitter" : 
                     url.includes("instagram") ? "Instagram" : "Generic";

    // إرجاع الروابط الجاهزة للمستخدم ليختار بينها (فيديو أو صوت)
    return NextResponse.json({
      title: "فيديو جاهز للتحميل",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113", // يمكن تغييره
      uploader: "مستخدم",
      platform: platform,
      formats: [
        { 
          format_id: "video", 
          quality: "أعلى جودة (Video)", 
          ext: "mp4", 
          download_url: data.url // الرابط المباشر للتحميل من السيرفر الخارجي
        },
        { 
          format_id: "audio", 
          quality: "صوت فقط (Audio)", 
          ext: "mp3", 
          // في التطبيق الحقيقي، يمكنك جعل الواجهة الأمامية ترسل طلب آخر لجلب رابط الصوت
          download_url: data.url 
        }
      ]
    });
  } catch (error) {
    console.error("Video Info Fetch Error:", error);
    return NextResponse.json(
      { error: 'حدث خطأ أثناء محاولة جلب الفيديو. تأكد من صحة الرابط.' },
      { status: 500 }
    );
  }
}
