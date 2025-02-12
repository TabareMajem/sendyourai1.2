import React, { useState } from 'react';
import { Zap, Plus, X } from 'lucide-react';

interface EventTriggerFormProps {
  onSubmit: (config: Record<string, unknown>) => void;
}

export function EventTriggerForm({ onSubmit }: EventTriggerFormProps) {
  const [eventType, setEventType] = useState('');
  const [conditions, setConditions] = useState<Array<{
    field: string;
    operator: string;
    value: string;
  }>>([]);

  const handleAddCondition = () => {
    setConditions([...conditions, { field: '', operator: 'equals', value: '' }]);
  };

  const handleRemoveCondition = (index: number) => {
    setConditions(conditions.filter((_, i) => i !== index));
  };

  const handleConditionChange = (index: number, field: string, value: string) => {
    const newConditions = [...conditions];
    newConditions[index] = { ...newConditions[index], [field]: value };
    setConditions(newConditions);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      eventType,
      conditions
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Event Type</label>
        <select
          value={eventType}
          onChange={(e) => setEventType(e.target.value)}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        >
          <option value="">Select event type</option>
          <option value="email.received">Email Received</option>
          <option value="form.submitted">Form Submitted</option>
          <option value="user.action">User Action</option>
          <option value="system.alert">System Alert</option>
        </select>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label className="block text-sm font-medium text-gray-700">Conditions</label>
          <button
            type="button"
            onClick={handleAddCondition}
            className="inline-flex items-center px-2 py-1 border border-transparent text-xs font-medium rounded text-indigo-600 bg-indigo-100 hover:bg-indigo-200"
          >
            <Plus className="w-4 h-4 mr-1" />
            Add Condition
          </button>
        </div>

        {conditions.map((condition, index) => (
          <div key={index} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Field"
              value={condition.field}
              onChange={(e) => handleConditionChange(index, 'field', e.target.value)}
              className="block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <select
              value={condition.operator}
              onChange={(e) => handleConditionChange(index, 'operator', e.target.value)}
              className="block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            >
              <option value="equals">Equals</option>
              <option value="notEquals">Not Equals</option>
              <option value="contains">Contains</option>
              <option value="greaterThan">Greater Than</option>
              <option value="lessThan">Less Than</option>
            </select>
            <input
              type="text"
              placeholder="Value"
              value={condition.value}
              onChange={(e) => handleConditionChange(index, 'value', e.target.value)}
              className="block w-1/3 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            />
            <button
              type="button"
              onClick={() => handleRemoveCondition(index)}
              className="p-1 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <Zap className="w-4 h-4 mr-2" />
          Create Event Trigger
        </button>
      </div>
    </form>
  );
}