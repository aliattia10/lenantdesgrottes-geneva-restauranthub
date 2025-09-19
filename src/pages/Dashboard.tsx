import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { CalendarDays, Clock, Users, Phone, Mail, CheckCircle, AlertCircle, XCircle } from 'lucide-react';

const Dashboard = () => {
  const { t } = useTranslation();
  
  // Mock reservation data
  const [reservations] = useState([
    {
      id: 1,
      name: 'Marie Dubois',
      email: 'marie.dubois@email.com',
      phone: '+41 22 123 4567',
      date: '2025-09-20',
      time: '19:30',
      guests: 4,
      status: 'confirmed',
      message: 'Table près de la fenêtre si possible'
    },
    {
      id: 2,
      name: 'Jean-Pierre Martin',
      email: 'jp.martin@email.com',
      phone: '+41 79 987 6543',
      date: '2025-09-20',
      time: '20:00',
      guests: 2,
      status: 'pending',
      message: 'Dîner romantique'
    },
    {
      id: 3,
      name: 'Anna Schmidt',
      email: 'anna.schmidt@email.com',
      phone: '+41 76 555 1234',
      date: '2025-09-21',
      time: '18:00',
      guests: 6,
      status: 'confirmed',
      message: 'Anniversaire - besoin d\'une grande table'
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david.wilson@email.com',
      phone: '+41 22 888 9999',
      date: '2025-09-21',
      time: '19:00',
      guests: 3,
      status: 'cancelled',
      message: ''
    }
  ]);

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'pending':
        return <AlertCircle className="h-4 w-4 text-yellow-500" />;
      case 'cancelled':
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: 'bg-green-100 text-green-800 border-green-200',
      pending: 'bg-yellow-100 text-yellow-800 border-yellow-200',
      cancelled: 'bg-red-100 text-red-800 border-red-200'
    };
    
    const labels = {
      confirmed: 'Confirmée',
      pending: 'En attente',
      cancelled: 'Annulée'
    };

    return (
      <Badge className={variants[status as keyof typeof variants] || variants.pending}>
        {labels[status as keyof typeof labels] || status}
      </Badge>
    );
  };

  const stats = {
    today: reservations.filter(r => r.date === '2025-09-20').length,
    pending: reservations.filter(r => r.status === 'pending').length,
    confirmed: reservations.filter(r => r.status === 'confirmed').length,
    totalGuests: reservations
      .filter(r => r.status === 'confirmed' && r.date === '2025-09-20')
      .reduce((sum, r) => sum + r.guests, 0)
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="font-playfair text-4xl md:text-5xl font-bold text-primary mb-4">
              Tableau de Bord - Réservations
            </h1>
            <div className="w-24 h-1 bg-gradient-accent mb-6"></div>
            <p className="font-inter text-lg text-foreground/80">
              Gérez toutes vos réservations depuis cette interface.
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Réservations Aujourd'hui</CardTitle>
                <CalendarDays className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.today}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">En Attente</CardTitle>
                <Clock className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Confirmées</CardTitle>
                <CheckCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.confirmed}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Couverts Aujourd'hui</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{stats.totalGuests}</div>
              </CardContent>
            </Card>
          </div>

          {/* Reservations Table */}
          <Card>
            <CardHeader>
              <CardTitle className="font-playfair text-2xl">Réservations Récentes</CardTitle>
              <CardDescription>
                Liste des réservations avec possibilité de gestion
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Client</TableHead>
                    <TableHead>Contact</TableHead>
                    <TableHead>Date & Heure</TableHead>
                    <TableHead>Couverts</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Message</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {reservations.map((reservation) => (
                    <TableRow key={reservation.id}>
                      <TableCell className="font-medium">
                        {reservation.name}
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center text-sm">
                            <Mail className="h-3 w-3 mr-1" />
                            {reservation.email}
                          </div>
                          <div className="flex items-center text-sm">
                            <Phone className="h-3 w-3 mr-1" />
                            {reservation.phone}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="space-y-1">
                          <div className="flex items-center">
                            <CalendarDays className="h-3 w-3 mr-1" />
                            {new Date(reservation.date).toLocaleDateString('fr-FR')}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-3 w-3 mr-1" />
                            {reservation.time}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center">
                          <Users className="h-3 w-3 mr-1" />
                          {reservation.guests}
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          {getStatusIcon(reservation.status)}
                          {getStatusBadge(reservation.status)}
                        </div>
                      </TableCell>
                      <TableCell className="max-w-xs">
                        {reservation.message && (
                          <div className="text-sm text-muted-foreground truncate">
                            {reservation.message}
                          </div>
                        )}
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-2">
                          {reservation.status === 'pending' && (
                            <>
                              <Button variant="outline" size="sm" className="text-green-600 border-green-600 hover:bg-green-50">
                                Confirmer
                              </Button>
                              <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                                Refuser
                              </Button>
                            </>
                          )}
                          {reservation.status === 'confirmed' && (
                            <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                              Annuler
                            </Button>
                          )}
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;