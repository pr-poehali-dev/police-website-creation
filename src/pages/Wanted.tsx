import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface WantedPerson {
  id: string;
  name: string;
  age: number;
  lastSeen: string;
  description: string;
  charges: string[];
  priority: "high" | "medium" | "low";
  photo: string;
  reward?: number;
}

const mockWantedData: WantedPerson[] = [
  {
    id: "001",
    name: "Иванов Алексей Петрович",
    age: 34,
    lastSeen: "г. Москва, район Хамовники",
    description:
      "Рост 175 см, среднее телосложение, темные волосы, карие глаза",
    charges: ["Мошенничество", "Уклонение от уплаты налогов"],
    priority: "high",
    photo:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
    reward: 50000,
  },
  {
    id: "002",
    name: "Петрова Мария Сергеевна",
    age: 28,
    lastSeen: "г. Санкт-Петербург, Невский район",
    description:
      "Рост 165 см, стройное телосложение, светлые волосы, голубые глаза",
    charges: ["Кража", "Незаконное хранение наркотиков"],
    priority: "medium",
    photo:
      "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=400&fit=crop&crop=face",
  },
  {
    id: "003",
    name: "Сидоров Владимир Николаевич",
    age: 42,
    lastSeen: "г. Екатеринбург, Железнодорожный район",
    description: "Рост 180 см, плотное телосложение, лысый, серые глаза",
    charges: ["Разбой", "Причинение тяжкого вреда здоровью"],
    priority: "high",
    photo:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=400&fit=crop&crop=face",
    reward: 100000,
  },
];

const Wanted = () => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "destructive";
      case "medium":
        return "default";
      case "low":
        return "secondary";
      default:
        return "default";
    }
  };

  const getPriorityText = (priority: string) => {
    switch (priority) {
      case "high":
        return "Высокий приоритет";
      case "medium":
        return "Средний приоритет";
      case "low":
        return "Низкий приоритет";
      default:
        return "Средний приоритет";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Icon name="Search" size={32} />
            <h1 className="text-3xl font-bold">База розыскных дел</h1>
          </div>
          <p className="text-blue-100">
            Информация о лицах, находящихся в федеральном и международном
            розыске
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex flex-wrap gap-4 items-center">
          <Button variant="outline">
            <Icon name="Filter" size={16} />
            Фильтры
          </Button>
          <Button variant="outline">
            <Icon name="SortAsc" size={16} />
            Сортировка
          </Button>
          <div className="ml-auto">
            <Badge variant="outline">
              Найдено: {mockWantedData.length} дел
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockWantedData.map((person) => (
            <Card key={person.id} className="overflow-hidden">
              <div className="relative">
                <img
                  src={person.photo}
                  alt={person.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 right-2">
                  <Badge variant={getPriorityColor(person.priority)}>
                    {getPriorityText(person.priority)}
                  </Badge>
                </div>
                {person.reward && (
                  <div className="absolute bottom-2 left-2">
                    <Badge className="bg-green-600">
                      Вознаграждение: {person.reward.toLocaleString()} ₽
                    </Badge>
                  </div>
                )}
              </div>

              <CardHeader>
                <CardTitle className="text-lg">{person.name}</CardTitle>
                <CardDescription>
                  {person.age} лет • Дело №{person.id}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Последнее место:
                  </p>
                  <p className="text-sm text-gray-600">{person.lastSeen}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-1">
                    Описание:
                  </p>
                  <p className="text-sm text-gray-600">{person.description}</p>
                </div>

                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">
                    Обвинения:
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {person.charges.map((charge, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {charge}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" className="flex-1">
                    <Icon name="Phone" size={14} />
                    Сообщить
                  </Button>
                  <Button size="sm" variant="outline">
                    <Icon name="FileText" size={14} />
                    Детали
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Icon name="AlertTriangle" size={20} className="text-amber-600" />
              <h3 className="font-semibold text-amber-800">
                Важная информация
              </h3>
            </div>
            <p className="text-sm text-amber-700">
              При обнаружении разыскиваемых лиц немедленно сообщите по телефону
              102 или 112. Не предпринимайте самостоятельных действий!
            </p>
          </div>
          <Button>
            <Icon name="Phone" size={16} />
            Экстренная связь: 102
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Wanted;
