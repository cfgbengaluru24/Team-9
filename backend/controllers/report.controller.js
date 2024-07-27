import Report from '../models/Report.js';

class ReportController{
    putReport = async (req, res) => {
        const { userId, reportText, createdAt, diagnostics, prescription } = req.body;
        
        if (!userId || !reportText || !createdAt) {
            return res.status(400).json({ success: false, message: 'Please provide all required fields' });
        }
        
        try {
            const user = await User.findById(userId);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            const nextVisit = new Date(createdAt);
            nextVisit.setDate(nextVisit.getDate() + 30);

            const report = new Report({
                user: userId,
                reportText,
                createdAt,
                diagnostics,
                prescription,
                nextVisit: nextVisit.toISOString() 
            });

            await report.save();
            res.status(201).json({ success: true, data: report });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    getReports = async (req, res) => {
        const userId = req.query.userId;

        if (!userId) {
            return res.status(400).json({ success: false, message: 'Please provide a userId' });
        }

        try {
            const reports = await Report.find({ user: userId });
            res.status(200).json({ success: true, data: reports });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

    deleteReport = async (req, res) => {
        const reportId = req.params.reportId;
        
        if (!reportId) {
            return res.status(400).json({ success: false, message: 'Please provide a reportId' });
        }

        try {
            const report = await Report.findByIdAndDelete(reportId);
            if (!report) {
                return res.status(404).json({ success: false, message: 'Report not found' });
            }
            res.status(200).json({ success: true, message: 'Report deleted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }
    
    analyzeReport = async (req, res) => {
        const reportId = req.params.reportId;
        if (!reportId) {
            return res.status(400).json({ success: false, message: 'Please provide a reportId' });
        }
        try {
            const report = await Report.findById(reportId);
            // Code for calling the flask application for analyzing the data 
        } catch (error) {
            res.status(500).json({ success: false, error: error.message });
        }
    }

}

export default new ReportController();