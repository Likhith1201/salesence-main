import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  User,
  Mail,
  Calendar,
  Crown,
  Camera,
  Save,
  ChevronLeft,
  Settings,
  Shield,
  CreditCard,
  BarChart3,
  Star,
  Edit3,
  Upload
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useTranslation } from 'react-i18next';
import { Chatbot } from '@/components/chatbot/Chatbot';

export default function Profile() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    bio: t('defaultBio'),
    company: 'My E-commerce Store',
    website: 'https://mystore.com',
    location: 'New York, USA'
  });
  const [profileImage, setProfileImage] = useState(user?.avatar || '');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to your backend
    console.log('Saving profile data:', profileData);
  };

  const handleInputChange = (field: string, value: string) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
  };

  if (!user) {
    navigate('/');
    return null;
  }

  const statsData = [
    { label: t('productsAnalyzed'), value: '247', icon: BarChart3, color: 'text-blue-400' },
    { label: t('optimizationsMade'), value: '89', icon: Star, color: 'text-yellow-400' },
    { label: t('revenueIncrease'), value: '+23%', icon: CreditCard, color: 'text-green-400' },
    { label: t('daysActive'), value: '156', icon: Calendar, color: 'text-purple-400' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-purple-900/30">
      {/* Header */}
      <div className="border-b border-white/10 bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="flex items-center text-gray-300 hover:text-white transition-colors group"
              >
                <ChevronLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
                {t('backToHomepage')}
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                onClick={() => setIsEditing(!isEditing)}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                {isEditing ? t('cancel') : t('editProfile')}
              </Button>
              <Button
                variant="ghost"
                onClick={signOut}
                className="text-gray-300 hover:text-white hover:bg-white/10"
              >
                {t('signOut')}
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8 max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <Card className="glass-effect border-white/10 text-center">
              <CardHeader className="pb-4">
                <div className="relative mx-auto w-32 h-32 mb-4">
                  <img
                    src={profileImage}
                    alt="Profile"
                    className="w-full h-full rounded-full object-cover border-4 border-purple-500/30"
                  />
                  {isEditing && (
                    <>
                      <button
                        onClick={() => fileInputRef.current?.click()}
                        className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-full opacity-0 hover:opacity-100 transition-opacity"
                      >
                        <Camera className="w-8 h-8 text-white" />
                      </button>
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="hidden"
                      />
                    </>
                  )}
                </div>
                <CardTitle className="text-2xl text-white">{profileData.name}</CardTitle>
                <p className="text-gray-300">{profileData.email}</p>
                <div className="flex justify-center mt-4">
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                    <Crown className="w-4 h-4 mr-1" />
                    {user.plan} {t('plan')}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 text-left">
                  <div className="flex items-center text-gray-300">
                    <Calendar className="w-4 h-4 mr-3 text-purple-400" />
                    <span className="text-sm">{t('joined')} {new Date(user.joinDate).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-3 text-purple-400" />
                    <span className="text-sm">{profileData.email}</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Shield className="w-4 h-4 mr-3 text-purple-400" />
                    <span className="text-sm">{t('accountVerified')}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="glass-effect border-white/10 mt-6">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2 text-purple-400" />
                  {t('quickStats')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {statsData.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                      <div className="text-xs text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Profile Information */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <User className="w-5 h-5 mr-2 text-purple-400" />
                  {t('profileInformation')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label className="text-gray-200">{t('fullName')}</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white"
                      />
                    ) : (
                      <p className="text-gray-300 p-3 bg-gray-800/30 rounded-lg">{profileData.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-200">{t('email')}</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white"
                        type="email"
                      />
                    ) : (
                      <p className="text-gray-300 p-3 bg-gray-800/30 rounded-lg">{profileData.email}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-200">{t('company')}</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white"
                      />
                    ) : (
                      <p className="text-gray-300 p-3 bg-gray-800/30 rounded-lg">{profileData.company}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label className="text-gray-200">{t('website')}</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white"
                        type="url"
                      />
                    ) : (
                      <a href={profileData.website} target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 p-3 bg-gray-800/30 rounded-lg block">
                        {profileData.website}
                      </a>
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-gray-200">{t('location')}</Label>
                    {isEditing ? (
                      <Input
                        value={profileData.location}
                        onChange={(e) => handleInputChange('location', e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white"
                      />
                    ) : (
                      <p className="text-gray-300 p-3 bg-gray-800/30 rounded-lg">{profileData.location}</p>
                    )}
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label className="text-gray-200">{t('bio')}</Label>
                    {isEditing ? (
                      <Textarea
                        value={profileData.bio}
                        onChange={(e) => handleInputChange('bio', e.target.value)}
                        className="bg-gray-800/50 border-gray-600 text-white min-h-[80px]"
                        placeholder={t('bioPlaceholder')}
                      />
                    ) : (
                      <p className="text-gray-300 p-3 bg-gray-800/30 rounded-lg">{profileData.bio}</p>
                    )}
                  </div>
                </div>

                {isEditing && (
                  <div className="flex justify-end space-x-4">
                    <Button
                      variant="outline"
                      onClick={() => setIsEditing(false)}
                      className="border-white/20 text-white hover:bg-white/10"
                    >
                      {t('cancel')}
                    </Button>
                    <Button
                      onClick={handleSave}
                      className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                    >
                      <Save className="w-4 h-4 mr-2" />
                      {t('saveChanges')}
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Settings className="w-5 h-5 mr-2 text-purple-400" />
                  {t('accountSettings')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">{t('currentPlan')}</h4>
                    <p className="text-gray-300 text-sm">{user.plan} - {t('planDescription')}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-purple-500 text-purple-400 hover:bg-purple-500/10"
                  >
                    {t('upgradePlan')}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">{t('billingInformation')}</h4>
                    <p className="text-gray-300 text-sm">{t('billingDescription')}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <CreditCard className="w-4 h-4 mr-2" />
                    {t('manage')}
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 bg-gray-800/30 rounded-lg">
                  <div>
                    <h4 className="text-white font-semibold">{t('securitySettings')}</h4>
                    <p className="text-gray-300 text-sm">{t('securityDescription')}</p>
                  </div>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10"
                  >
                    <Shield className="w-4 h-4 mr-2" />
                    {t('security')}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Chatbot */}
      <Chatbot />
    </div>
  );
}