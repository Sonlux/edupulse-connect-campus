
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import FacultyIndex from "./pages/FacultyIndex";
import FacultyMarks from "./pages/FacultyMarks";
import FacultyAttendance from "./pages/FacultyAttendance";
import FacultyAnnouncements from "./pages/FacultyAnnouncements";
import FacultyClasses from "./pages/FacultyClasses";
import FacultyReports from "./pages/FacultyReports";
import Messages from "./pages/Messages";
import Assignments from "./pages/Assignments";
import Attendance from "./pages/Attendance";
import Grades from "./pages/Grades";
import Schedule from "./pages/Schedule";
import Settings from "./pages/Settings";
import AdminIndex from "./pages/AdminIndex";
import AdminUsers from "./pages/AdminUsers";
import AdminDepartments from "./pages/AdminDepartments";
import AdminCourses from "./pages/AdminCourses";
import AdminCalendar from "./pages/AdminCalendar";
import AdminReports from "./pages/AdminReports";
import AdminSystem from "./pages/AdminSystem";
import AdminNotifications from "./pages/AdminNotifications";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<AdminIndex />} />
            <Route path="/admin/users" element={<AdminUsers />} />
            <Route path="/admin/departments" element={<AdminDepartments />} />
            <Route path="/admin/courses" element={<AdminCourses />} />
            <Route path="/admin/calendar" element={<AdminCalendar />} />
            <Route path="/admin/reports" element={<AdminReports />} />
            <Route path="/admin/system" element={<AdminSystem />} />
            <Route path="/admin/notifications" element={<AdminNotifications />} />
            
            {/* Faculty Routes */}
            <Route path="/faculty" element={<FacultyIndex />} />
            <Route path="/faculty/classes" element={<FacultyClasses />} />
            <Route path="/faculty/attendance" element={<FacultyAttendance />} />
            <Route path="/faculty/marks" element={<FacultyMarks />} />
            <Route path="/faculty/announcements" element={<FacultyAnnouncements />} />
            <Route path="/faculty/reports" element={<FacultyReports />} />
            
            {/* Student Routes */}
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/grades" element={<Grades />} />
            <Route path="/schedule" element={<Schedule />} />
            
            {/* Shared Routes */}
            <Route path="/assignments" element={<Assignments />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/settings" element={<Settings />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
