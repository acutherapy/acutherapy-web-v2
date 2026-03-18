export default function handler(req, res) {
    const { pid, email_type } = req.query;
    
    // 记录跳转点击信息
    const logData = {
        action: 'redirect_book',
        pid: pid || 'none',
        email_type: email_type || 'none',
        timestamp: new Date().toISOString()
    };
    
    // 打印到 Vercel Logs 中作为记录
    console.log(JSON.stringify(logData));

    // 执行跳转
    res.redirect('https://acutherapy.com/book-appointment');
}
